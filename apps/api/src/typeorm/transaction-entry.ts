import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  type Relation,
  UpdateDateColumn,
} from 'typeorm';

import { Account } from './account.js';
import { Transaction } from './transaction.js';

@Entity('transaction_entry')
export class TransactionEntry {
  @PrimaryGeneratedColumn('increment', {
    name: 'transaction_entry_id',
    type: 'bigint',
  })
  transactionEntryId: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'numeric', nullable: false })
  amount: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp with time zone',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp with time zone',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  // Relations

  @Column({ name: 'transaction_id', type: 'bigint', nullable: false })
  transactionId: bigint;

  @ManyToOne(() => Transaction, (transaction) => transaction.entries)
  @JoinColumn({
    name: 'transaction_id',
    referencedColumnName: 'transactionId',
  })
  transaction: Transaction;

  @Column({ name: 'account_number', type: 'int', nullable: false })
  accountNumber: number;

  @ManyToOne(() => Account, (account) => account.entries)
  @JoinColumn({ name: 'account_number', referencedColumnName: 'accountNumber' })
  account: Relation<Account>;
}
