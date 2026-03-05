// apps/web/src/types/account.ts

export interface Account {
  accountNumber: number;
  type: AccountType;
  name: string;
  description?: string;
}

// It's a good practice to mirror your API's ACCOUNT_TYPES enum
export type AccountType =
  | 'ASSET'
  | 'LIABILITY'
  | 'EQUITY'
  | 'REVENUE'
  | 'EXPENSE';
