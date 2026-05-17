import ChartOfAccounts from '@plutonaut/web/src/app/accounts/components/chart-of-accounts';
import { PageTitle } from '@plutonaut/web/src/components/page-title';

export default async function AccountsPage() {
  return (
    <>
      <PageTitle title="Accounts" />
      <ChartOfAccounts />
    </>
  );
}

export const metadata = {
  title: 'Accounts | Plutonaut',
  description: 'Accounts',
};
