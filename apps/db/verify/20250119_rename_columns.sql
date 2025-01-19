BEGIN;

DO
$$
    BEGIN
        -- account has account_number
        ASSERT (
            SELECT
                TRUE
            FROM
                information_schema.columns
            WHERE
                table_name = 'account'
                AND column_name = 'account_number'
        );

        -- currency has currency_code
        ASSERT (
            SELECT
                TRUE
            FROM
                information_schema.columns
            WHERE
                table_name = 'currency'
                AND column_name = 'currency_code'
        );

        -- transaction has transaction_id
        ASSERT (
            SELECT
                TRUE
            FROM
                information_schema.columns
            WHERE
                table_name = 'transaction'
                AND column_name = 'transaction_id'
        );

        -- transaction_entry has transaction_entry_id
        ASSERT (
            SELECT
                TRUE
            FROM
                information_schema.columns
            WHERE
                table_name = 'transaction_entry'
                AND column_name = 'transaction_entry_id'
        );

        -- transaction_entry has account_number
        ASSERT (
            SELECT
                TRUE
            FROM
                information_schema.columns
            WHERE
                table_name = 'transaction_entry'
                AND column_name = 'transaction_entry_id'
        );
    END
$$;

ROLLBACK;
