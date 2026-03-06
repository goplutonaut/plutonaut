import { SectionTitle } from '../../../components/section-title';

import { Account } from '../../../types/account';

export const ChartOfAccounts = ({ accounts }: { accounts: Account[] }) => {
  console.log('ChartOfAccounts', accounts);
  return (
    <>
      <SectionTitle title="Chart of Accounts" />
      <div className="bg-white dark:bg-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600 space-y-4 shadow-sm">
        {accounts.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No accounts found.
          </p>
        ) : (
          <ul className="space-y-2">
            {accounts.map((account) => (
              <li
                key={account.accountNumber}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    {account.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {account.type}
                  </p>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  #{account.accountNumber}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
