BEGIN;

DROP TRIGGER IF EXISTS check_transaction_is_balanced_after_delete ON transaction_entry;
DROP TRIGGER IF EXISTS check_transaction_is_balanced_after_update ON transaction_entry;
DROP TRIGGER IF EXISTS check_transaction_is_balanced_after_insert ON transaction_entry;

DROP FUNCTION check_transaction_is_balanced();

COMMIT;
