import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL as string,
  },
  out: './supabase/migrations',
  verbose: true,
  strict: true,
})
