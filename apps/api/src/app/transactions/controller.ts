import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DatabaseError } from 'pg';
import { DataSource, Repository, QueryFailedError } from 'typeorm';
import type { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

import { Transaction } from '../../typeorm/transaction';
import { TransactionEntry } from '../../typeorm/transaction-entry';

import * as schemas from './schemas';

@Controller()
export class TransactionsController {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionsRepository: Repository<Transaction>,
    private readonly dataSource: DataSource
  ) {}

  @Get('transactions')
  findAll(): Promise<Transaction[]> {
    return this.transactionsRepository.find();
  }

  @Post('transaction')
  async create(@Body() b: unknown): Promise<void> {
    const body = schemas.create.body.parse(b);

    try {
      await this.dataSource.transaction(async (manager) => {
        const transaction: QueryDeepPartialEntity<Transaction> = {
          name: body.name,
          description: body.description,
          date: body.date,
        };

        const transactionResult = await manager.insert(
          Transaction,
          transaction
        );
        const transactionId: bigint = transactionResult.identifiers[0].id;

        const entries = body.entries.map(
          (entry): QueryDeepPartialEntity<TransactionEntry> => ({
            description: entry.description,
            amount: entry.amount.toString(),

            transactionId,
            accountNumber: entry.accountNumber,
          })
        );

        await manager.insert(TransactionEntry, entries);
      });
    } catch (e) {
      // (Trigger-based) Check constraint
      if (e instanceof QueryFailedError) {
        const db = e.driverError as DatabaseError;

        if (db.code === '23514') {
          throw new HttpException(
            {
              type: 'DatabaseError',
              code: db.code,
              message: db.message,
            },
            HttpStatus.BAD_REQUEST
          );
        }
      }

      throw e;
    }
  }
}
