import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Account } from '../../typeorm/account.js';

import { AccountsController } from './controller.js';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [AccountsController],
})
export class AccountsModule {}
