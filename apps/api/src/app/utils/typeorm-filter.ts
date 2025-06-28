import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import type { Response } from 'express';
import { QueryFailedError } from 'typeorm';
import { DatabaseError } from 'pg';

// Sourced from https://www.postgresql.org/docs/current/errcodes-appendix.html
const PG_CODE_STATUSES = {
  '23505': HttpStatus.BAD_REQUEST,
};

@Catch(QueryFailedError)
export class TypeOrmFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();

    const db = exception.driverError as DatabaseError;
    const code = db.code as keyof typeof PG_CODE_STATUSES;
    const status = PG_CODE_STATUSES[code] ?? HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      type: 'DatabaseError',
      code: db.code,
      message: db.message,
      detail: db.detail,
    });
  }
}
