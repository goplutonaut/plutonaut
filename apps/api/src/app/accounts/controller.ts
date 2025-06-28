import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Account } from '../../typeorm/account.js';

import * as schemas from './schemas.js';

@Controller()
export class AccountsController {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>
  ) {}

  @Get('/accounts')
  findAll(): Promise<Account[]> {
    return this.accountRepository.find();
  }

  @Post('/account')
  async create(@Body() b: unknown): Promise<unknown> {
    const body = schemas.create.body.parse(b);

    await this.accountRepository.insert(body);

    return body;
  }
}
