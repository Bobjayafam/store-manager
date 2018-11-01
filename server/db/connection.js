import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let connectionString = process.env.DATABASE_URL;
let ssl = false;
if (process.env.NODE_ENV === 'test') {
  connectionString = process.env.DATABASE_URL_TEST;
}
if (process.env.NODE_ENV === 'production') {
  ssl = true;
}
const pool = new Pool({
  connectionString,
  ssl,
});

export default pool;
