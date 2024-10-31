-- Expense Tags
-- By Category
  -- Uber Eats
  -- Staples
  -- Health
  -- Transport
  -- Leisure
  -- Utilities
  -- Other

-- By Owner
  -- Manuel
  -- Marylu

-- By Receiver
  -- Manuel Mother
  -- Marylu Mother

INSERT INTO
    account (number, type, name)
VALUES
    (101, 'ASSET', 'Manuel BCI CLP'),
    (102, 'ASSET', 'Manuel BCI USD'),
    (103, 'ASSET', 'Manuel BancoEstado CLP'),

    (111, 'ASSET', 'Manuel Cash CLP'),
    (112, 'ASSET', 'Manuel Cash USD'),

    (121, 'ASSET', 'Manuel AR Internal CLP'),
    (122, 'ASSET', 'Manuel AR Internal USD'),
    (123, 'ASSET', 'Manuel AR External CLP'),
    (124, 'ASSET', 'Manuel AR External USD'),

    (201, 'ASSET', 'Marylu Santander Checkings CLP'),
    (202, 'ASSET', 'Marylu Santander Savings CLP'),
    (203, 'ASSET', 'Marylu Santander USD'),
    (204, 'ASSET', 'Marylu BancoEstado CLP'),
    (205, 'ASSET', 'Marylu Wells Fargo Checkings USD'),
    (206, 'ASSET', 'Marylu Wells Fargo Savings USD'),
    (207, 'ASSET', 'Marylu MercadoPago CLP'),

    (211, 'ASSET', 'Marylu Cash CLP'),
    (212, 'ASSET', 'Marylu Cash USD'),

    (301, 'LIABILITY', 'Manuel BCI Visa CC CLP'),
    (302, 'LIABILITY', 'Manuel BCI Visa CC USD'),
    (303, 'LIABILITY', 'Manuel BCI Master CC CLP'),
    (304, 'LIABILITY', 'Manuel BCI Master CC USD'),

    (311, 'LIABILITY', 'Manuel AP Internal CLP'),
    (312, 'LIABILITY', 'Manuel AP Internal USD'),
    (313, 'LIABILITY', 'Manuel AP External CLP'),
    (314, 'LIABILITY', 'Manuel AP External USD'),

    (401, 'LIABILITY', 'Marylu Santander Visa CC CLP'),
    (402, 'LIABILITY', 'Marylu Santander Visa CC USD'),

    (411, 'LIABILITY', 'Marylu AP Internal CLP'),
    (412, 'LIABILITY', 'Marylu AP Internal USD'),
    (413, 'LIABILITY', 'Marylu AP External CLP'),
    (414, 'LIABILITY', 'Marylu AP External USD'),

    (501, 'REVENUE', 'Manuel Salary USD'),
    (502, 'REVENUE', 'Manuel Other CLP'),

    (601, 'REVENUE', 'Marylu Salary CLP'),
    (602, 'REVENUE', 'Marylu Other CLP'),

    (701, 'EXPENSE', 'Expense CLP'),
    (702, 'EXPENSE', 'Expense USD'),

    (801, 'EQUITY', 'Equity CLP'),
    (802, 'EQUITY', 'Equity USD'),