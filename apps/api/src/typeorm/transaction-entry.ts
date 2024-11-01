import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Account } from './account';
import { Transaction } from './transaction';

@Entity('transaction_entry')
export class TransactionEntry {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: bigint;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'numeric', nullable: false })
  amount: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'date', nullable: false })
  date: string;

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
  @JoinColumn({ name: 'transaction_id', referencedColumnName: 'id' })
  transaction: Transaction;

  @Column({ name: 'account_no', type: 'int', nullable: false })
  accountNo: number;

  @ManyToOne(() => Account, (account) => account.entries)
  @JoinColumn({ name: 'account_no', referencedColumnName: 'number' })
  account: Account;
}
