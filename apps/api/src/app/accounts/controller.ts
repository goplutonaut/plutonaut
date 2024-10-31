import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Account } from '../../typeorm/account';

@Controller('accounts')
export class AccountsController {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>
  ) {}

  @Get()
  findAll(): Promise<Account[]> {
    return this.accountRepository.find();
  }
}
