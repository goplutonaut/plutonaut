/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { ZodFilter } from './app/utils/zod-filter';
import { TypeOrmFilter } from './app/utils/typeorm-filter';

async function bootstrap() {
  const prefix = 'api';
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(prefix);
  app.useGlobalFilters(new ZodFilter());
  app.useGlobalFilters(new TypeOrmFilter());

  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${prefix}`
  );
}

bootstrap();
