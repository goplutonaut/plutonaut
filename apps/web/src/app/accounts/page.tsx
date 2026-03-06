import { PageTitle } from '../../components/page-title';

import { ChartOfAccounts } from './components/chart-of-accounts';

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
