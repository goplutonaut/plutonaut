BEGIN;

CREATE TABLE currency
(
    code       TEXT PRIMARY KEY CHECK (code ~ '^[A-Z]{3}$'),
    name       TEXT                     NOT NULL,

    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
    currency (code, name)
VALUES
    ('USD', 'United States Dollar'),
    ('CLP', 'Chilean Peso'),
    ('ARS', 'Argentine Peso')
;

ALTER TABLE account
    ADD COLUMN currency_code TEXT NOT NULL DEFAULT 'USD'
        REFERENCES currency (code) ON UPDATE CASCADE ON DELETE NO ACTION;

COMMIT;
