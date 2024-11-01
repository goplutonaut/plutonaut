import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { TransactionEntry } from './transaction-entry';

export type AccountType =
  | 'ASSET'
  | 'LIABILITY'
  | 'EQUITY'
  | 'REVENUE'
  | 'EXPENSE';

@Entity('account')
export class Account {
  @PrimaryColumn({ type: 'integer' })
  number: number;

  @Column({
    type: 'enum',
    enum: ['ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'EXPENSE'],
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
