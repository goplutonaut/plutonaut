import { DataSourceOptions } from 'typeorm';

import { Account } from './account';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'plutonaut',
  username: 'plutonaut',
  password: 'plutonaut',
  entities: [Account],
};
