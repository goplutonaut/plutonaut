BEGIN;

DO
$$
    BEGIN
        -- Currency table exists (TODO)
        ASSERT (
            SELECT
                TRUE
            FROM
                pg_catalog.pg_tables
            WHERE
                tablename = 'currency'
        );

        -- Account has currency
        ASSERT (
            SELECT
                TRUE
            FROM
                information_schema.columns
            WHERE
                table_name = 'account'
                AND column_name = 'currency_code'
        );
    END
$$;

ROLLBACK;
