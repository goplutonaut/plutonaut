import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import type { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ZodError } from 'zod';

@Catch(ZodError)
export class ZodFilter<E extends ZodError> implements ExceptionFilter {
  catch(exception: E, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();

    response.status(StatusCodes.BAD_REQUEST).json({
      type: 'ValidationError',
      errors: exception.errors,
    });
  }
}
