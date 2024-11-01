import { DataSourceOptions } from 'typeorm';

import { Account } from './account';
import { Transaction } from './transaction';
import { TransactionEntry } from './transaction-entry';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'plutonaut',
  username: 'plutonaut',
  password: 'plutonaut',
  entities: [Account, Transaction, TransactionEntry],
};
