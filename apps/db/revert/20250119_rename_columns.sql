BEGIN;

-- Rename old references in the check_transaction_is_balanced function

CREATE OR REPLACE FUNCTION check_transaction_is_balanced() RETURNS TRIGGER AS
$$
BEGIN
    CREATE TEMP TABLE transactions_to_check
    (
        transaction_id BIGINT
    ) ON COMMIT DROP;

    IF (TG_OP = 'INSERT') THEN
        INSERT INTO
            transactions_to_check
        SELECT DISTINCT
            transaction_id
        FROM
            new_table;
    ELSIF (TG_OP = 'UPDATE') THEN
        INSERT INTO
            transactions_to_check
        SELECT DISTINCT
            transaction_id
        FROM
            new_table;
    ELSIF (TG_OP = 'DELETE') THEN
        INSERT INTO
            transactions_to_check
        SELECT DISTINCT
            transaction_id
        FROM
            old_table;
    END IF;

    PERFORM
        t.id, a.currency_code
    FROM
        transactions_to_check ttc
            JOIN transaction t ON (ttc.transaction_id = t.id)
            JOIN transaction_entry te ON (t.id = te.transaction_id)
            JOIN account a ON (te.account_no = a.number)
    GROUP BY
        t.id, a.currency_code
    HAVING
        SUM(te.amount) != 0;

    IF FOUND THEN
        RAISE check_violation USING MESSAGE = 'Transactions are not balanced';
    END IF;

    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Rename foreign keys

ALTER TABLE transaction_entry
    RENAME COLUMN account_number TO account_no;

-- Rename primary keys

ALTER TABLE transaction_entry
    RENAME COLUMN transaction_entry_id TO id;

ALTER TABLE transaction
    RENAME COLUMN transaction_id TO id;

ALTER TABLE currency
    RENAME COLUMN currency_code TO code;

ALTER TABLE account
    RENAME COLUMN account_number TO number;

COMMIT;
