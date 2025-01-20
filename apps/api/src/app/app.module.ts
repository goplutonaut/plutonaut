import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dataSourceOptions } from '../typeorm/data-source';

import { AccountsModule } from './accounts/module';
import { SnapshotsModule } from './snapshots/module';
import { TransactionsModule } from './transactions/module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

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
