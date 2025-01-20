import { spawn } from 'node:child_process';
import process from 'node:process';

export const pgDump = () => {
  const env = { ...process.env, PGPASSWORD: 'plutonaut' };

  const connection = [
    '--host=localhost',
    '--port=5432',
    '--username=plutonaut',
    '--dbname=plutonaut',
    '--no-password',
  ];

  const data = [
    '--format=p',
    '--data-only',
    '--schema=public',
    // When needed, we can consider compression
  ];

  const args = [...connection, ...data];

  return spawn('pg_dump', args, { env });
};
