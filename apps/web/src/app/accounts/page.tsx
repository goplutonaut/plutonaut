import { PageTitle } from '../../components/page-title';
import { ENV } from '../../config/env.config';

import { Account } from '../../types/account';

const getAccounts = async (): Promise<Account[]> => {
  const res = await fetch(`${ENV.API_URL}/accounts`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};

export default async function AccountsPage() {
  const accounts = await getAccounts();
  console.log(accounts);

  return (
    <div>
      <PageTitle title="Accounts" />
      {accounts.length === 0 ? (
        <p>No accounts found.</p>
      ) : (
        <ul>
          {accounts.map((account) => (
            <li key={account.accountNumber}>
              {account.name} ({account.type})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export const metadata = {
  title: 'Accounts | Plutonaut',
  description: 'Accounts',
};
