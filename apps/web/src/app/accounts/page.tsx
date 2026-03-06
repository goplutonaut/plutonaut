import { PageTitle } from '../../components/page-title';
import { ENV } from '../../config/env.config';

import { Account } from '../../types/account';
import { ChartOfAccounts } from './components/chart-of-accounts';

const getAccounts = async (): Promise<Account[]> => {
  try {
    const res = await fetch(`${ENV.API_URL}/accounts`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch');

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default async function AccountsPage() {
  const accounts = await getAccounts();
  console.log(accounts);

  return (
    <div>
      <PageTitle title="Accounts" />
      <ChartOfAccounts accounts={accounts} />
    </div>
  );
}

export const metadata = {
  title: 'Accounts | Plutonaut',
  description: 'Accounts',
};
