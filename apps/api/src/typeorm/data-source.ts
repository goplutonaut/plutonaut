import { DataSourceOptions } from 'typeorm';

import { Account } from './account.js';
import { Transaction } from './transaction.js';
import { TransactionEntry } from './transaction-entry.js';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'plutonaut',
  username: 'plutonaut',
  password: 'plutonaut',
  entities: [Account, Transaction, TransactionEntry],
};
