import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import type { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

import { Transaction } from '../../typeorm/transaction';
import { TransactionEntry } from '../../typeorm/transaction-entry';

import * as schemas from './schemas';
import { CreateTransactionResponse } from './types';

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

    await this.dataSource.transaction(async (manager) => {
      const transaction: QueryDeepPartialEntity<Transaction> = {
        name: body.name,
        description: body.description,
        date: body.date,
      };

      const transactionResult = await manager.insert(Transaction, transaction);
      const transactionId: bigint = transactionResult.identifiers[0].id;

      const entries = body.entries.map(
        (entry): QueryDeepPartialEntity<TransactionEntry> => ({
          description: entry.description,
          amount: entry.amount.toString(),

          transactionId,
          accountNo: entry.accountNo,
        })
      );

      await manager.insert(TransactionEntry, entries);
    });
  }
}
