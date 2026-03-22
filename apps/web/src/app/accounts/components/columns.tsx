'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Account } from '../../../types/account';

export const columns: ColumnDef<Account>[] = [
  {
    accessorKey: 'accountNumber',
    header: 'Account Number',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
];
