BEGIN;

DO
$$
    BEGIN
        ASSERT (
            SELECT TRUE FROM pg_catalog.pg_tables WHERE tablename = 'account'
        );

        ASSERT (
            SELECT TRUE FROM pg_catalog.pg_tables WHERE tablename = 'transaction'
        );

        ASSERT (
            SELECT TRUE FROM pg_catalog.pg_tables WHERE tablename = 'transaction_entry'
        );
    END
$$;

ROLLBACK;
