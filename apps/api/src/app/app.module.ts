import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dataSourceOptions } from '../typeorm/data-source.js';

import { AccountsModule } from './accounts/module.js';
import { SnapshotsModule } from './snapshots/module.js';
import { TransactionsModule } from './transactions/module.js';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),

    AccountsModule,
    SnapshotsModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
