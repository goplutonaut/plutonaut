import { z } from 'zod';

import { ACCOUNT_TYPES } from '../../typeorm/account';

export const create = {
  body: z
    .object({
      accountNumber: z.number().positive(),
      type: z.enum(ACCOUNT_TYPES),
      name: z.string().min(1).max(255),
      description: z.string().max(2048).optional(),
    })
    .strict(),
};
