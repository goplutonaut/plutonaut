BEGIN;
    ALTER TABLE account DROP COLUMN currency_code;

    DROP TABLE currency;
COMMIT;
