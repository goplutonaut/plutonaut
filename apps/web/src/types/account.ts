export const ACCOUNT_TYPES_KEYS = [
  'ASSET',
  'LIABILITY',
  'EQUITY',
  'REVENUE',
  'EXPENSE',
] as const;

export type AccountType = (typeof ACCOUNT_TYPES_KEYS)[number];

export interface Account {
  accountNumber: number;
  type: AccountType;
  name: string;
  description?: string;
}
