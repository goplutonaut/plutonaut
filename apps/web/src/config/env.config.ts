// apps/web/src/config/env.config.ts

export const ENV = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
} as const;

export type ENV = typeof ENV;
