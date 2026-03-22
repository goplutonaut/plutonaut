'use client';

import { useQuery } from '@tanstack/react-query';

import { SectionTitle } from '../../../components/section-title';

import { Account } from '../../../types/account';
import { ENV } from '../../../config/env.config';
import { DataTable } from './data-table';
import { columns } from './columns';

const fetchAccounts = async (): Promise<Account[]> => {
  const res = await fetch(`${ENV.API_URL}/accounts`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch accounts');

  return res.json();
};

export const ChartOfAccounts = () => {
  const {
    data: accounts,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['accounts'], queryFn: fetchAccounts });

  if (isError) console.error(`Error: ${error.message}`);
  return (
    <>
      <SectionTitle title="Chart of Accounts" />

      {isLoading && <p className="text-sm">Loading accounts...</p>}
      {isError && (
        <p className="text-sm text-red-500">Failed to load accounts.</p>
      )}

      {accounts && !isError && !isLoading && (
        <div className="bg-white dark:bg-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600 space-y-4 shadow-sm">
          <DataTable columns={columns} data={accounts} />
        </div>
      )}
    </>
  );
};
