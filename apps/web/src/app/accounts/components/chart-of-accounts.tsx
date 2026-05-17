'use client';

import { columns } from '@plutonaut/web/src/app/accounts/components/columns';
import { DataTable } from '@plutonaut/web/src/app/accounts/components/data-table';
import { SectionTitle } from '@plutonaut/web/src/components/section-title';
import { ENV } from '@plutonaut/web/src/config/env.config';
import { Account } from '@plutonaut/web/src/types/account';
import { useQuery } from '@tanstack/react-query';

const fetchAccounts = async (): Promise<Account[]> => {
  const res = await fetch(`${ENV.API_URL}/accounts`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch accounts');

  return res.json();
};

function ChartOfAccounts() {
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
        <DataTable columns={columns} data={accounts} />
      )}
    </>
  );
}

export default ChartOfAccounts;
