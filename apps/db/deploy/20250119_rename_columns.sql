BEGIN;

-- Rename primary keys

ALTER TABLE account
    RENAME COLUMN number TO account_number;

ALTER TABLE currency
    RENAME COLUMN code TO currency_code;

ALTER TABLE transaction
    RENAME COLUMN id TO transaction_id;

ALTER TABLE transaction_entry
    RENAME COLUMN id TO transaction_entry_id;

-- Rename foreign keys

ALTER TABLE transaction_entry
    RENAME COLUMN account_no TO account_number;

-- Rename new references in the check_transaction_is_balanced function

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
        t.transaction_id, a.currency_code
    FROM
        transactions_to_check ttc
            JOIN transaction t USING (transaction_id)
            JOIN transaction_entry te USING (transaction_id)
            JOIN account a USING (account_number)
    GROUP BY
        t.transaction_id, a.currency_code
    HAVING
        SUM(te.amount) != 0;

    IF FOUND THEN
        RAISE check_violation USING MESSAGE = 'Transactions are not balanced';
    END IF;

    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

COMMIT;
