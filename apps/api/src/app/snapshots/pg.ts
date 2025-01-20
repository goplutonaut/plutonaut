import { ChildProcess, exec } from 'node:child_process';

export const pgDump = (): ChildProcess => {
  const passwordEnv = 'PGPASSWORD="plutonaut"';
  const connectionFlags = [
    '--host=localhost',
    '--port=5432',
    '--username=plutonaut',
    '--dbname=plutonaut',
    '--no-password',
  ];
  const dataFlags = [
    '--format=p',
    '--data-only',
    '--schema=public',
    // When needed, we can consider compression
  ];

  const command = [
    passwordEnv,
    'pg_dump',
    ...connectionFlags,
    ...dataFlags,
  ].join(' ');

  return exec(command);
};
