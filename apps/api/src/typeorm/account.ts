import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { TransactionEntry } from './transaction-entry';

export type AccountType = (typeof ACCOUNT_TYPES)[number];

export const ACCOUNT_TYPES = [
  'ASSET',
  'LIABILITY',
  'EQUITY',
  'REVENUE',
  'EXPENSE',
] as const;

@Entity('account')
export class Account {
  @PrimaryColumn({ name: 'account_number', type: 'integer' })
  accountNumber: number;

  @Column({
    type: 'enum',
    enum: ACCOUNT_TYPES,
    nullable: false,
  })
  type: AccountType;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  // Relations

  @OneToMany(() => TransactionEntry, (entry) => entry.account)
  entries: TransactionEntry[];
}
