import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import { env } from '$env/dynamic/private';
import * as schema from './schema';

const databaseUrl = (env as Record<string, string>).DATABASE_URL;

if (!databaseUrl) throw new Error('DATABASE_URL is not set');

const pool = new pg.Pool({
	connectionString: databaseUrl
});

export const db = drizzle(pool, { schema });
