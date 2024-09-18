CREATE TABLE account
(
    number      INT PRIMARY KEY,
    name        TEXT                     NOT NULL,
    description TEXT                     NULL,

    created_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transaction
(
    id          BIGSERIAL PRIMARY KEY,
    name        TEXT                     NOT NULL,
    description TEXT                     NULL,

    date        DATE                     NOT NULL,

    created_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transaction_entry
(
    id             BIGSERIAL PRIMARY KEY,
    description    TEXT                     NULL,
    amount         NUMERIC                  NOT NULL,

    created_at     TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    transaction_id BIGINT REFERENCES transaction (id),
    account_no     INT REFERENCES account (number)
);
