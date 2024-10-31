import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Account } from '../../typeorm/account';

import { AccountsController } from './controller';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [AccountsController],
})
export class AccountsModule {}
