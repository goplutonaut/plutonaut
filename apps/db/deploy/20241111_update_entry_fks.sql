BEGIN;

-- Drop account_no foreign key constraint
ALTER TABLE transaction_entry
    DROP CONSTRAINT transaction_entry_account_no_fkey;

-- Add constraint again with ON UPDATE CASCADE
ALTER TABLE transaction_entry
    ADD CONSTRAINT transaction_entry_account_no_fkey
        FOREIGN KEY (account_no)
        REFERENCES account (number)
        ON UPDATE CASCADE
        ON DELETE NO ACTION;

-- Drop transaction_id foreign key constraint
ALTER TABLE transaction_entry
    DROP CONSTRAINT transaction_entry_transaction_id_fkey;

-- Add constraint again with ON UPDATE CASCADE ON DELETE CASCADE
ALTER TABLE transaction_entry
    ADD CONSTRAINT transaction_entry_transaction_id_fkey
        FOREIGN KEY (transaction_id)
        REFERENCES transaction (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE;

COMMIT;
