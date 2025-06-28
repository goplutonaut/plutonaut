import { z } from 'zod';
import { BigNumber } from 'bignumber.js';

// TODO Improve
// Some of these validations can be also included at the database level
// using CHECK constraints and FOR EACH STATEMENT triggers
export const create = {
  body: z
    .object({
      name: z.string().min(1).max(255),
      description: z.string().max(2048).optional(),
      date: z.string().date(),
      // TODO IMPROVE Validate each account appears only once
      // Perhaps through a unique index in transaction_entry(account_no, transaction_id)
      entries: z
        .array(
          z.object({
            accountNumber: z.number().positive(),
            amount: z
              .string()
              .transform((s) => new BigNumber(s))
              .refine((bn) => !bn.isZero(), 'Entry amount cannot be zero')
              .refine(
                (bn) => bn.isFinite(),
                'Entry amount must be a string holding a finite decimal'
              ),
            description: z.string().max(2048).optional(),
          })
        )
        .nonempty()
        .refine(
          (entries) =>
            BigNumber.sum(...entries.map((entry) => entry.amount)).isZero(),
          'Transaction entries must balance'
        ),
    })
    .strict(),
};
