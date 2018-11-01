import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// let connectionString = process.env.NODE_ENV === 'test' ? process.env.DATABASE_URL_TEST : process.env.DATABASE_URL;

let connectionString = process.env.DATABASE_URL;

if (process.env.NODE_ENV === 'test') {
  connectionString = process.env.DATABASE_URL_TEST;
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});



export default pool;
