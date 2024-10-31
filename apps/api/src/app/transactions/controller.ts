import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Transaction } from '../../typeorm/transaction';

@Controller('transactions')
export class TransactionsController {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionsRepository: Repository<Transaction>
  ) {}

  @Get()
  findAll(): Promise<Transaction[]> {
    return this.transactionsRepository.find();
  }
}
