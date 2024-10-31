import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dataSourceOptions } from '../typeorm/data-source';

import { AccountsModule } from './accounts/module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
