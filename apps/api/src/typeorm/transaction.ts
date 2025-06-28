import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  type Relation,
  UpdateDateColumn,
} from 'typeorm';
import { TransactionEntry } from './transaction-entry.js';

@Entity('transaction')
export class Transaction {
  @PrimaryGeneratedColumn('increment', {
    name: 'transaction_id',
    type: 'bigint',
  })
  transactionId: bigint;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'date', nullable: false })
  date: string;

  // Timestamps

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

  @OneToMany(() => TransactionEntry, (entry) => entry.transaction)
  entries: Relation<TransactionEntry>[];
}
