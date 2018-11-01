import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.NODE_ENV === 'test' ? process.env.DATABASE_URI_TEST : process.env.DATABASE_URI;


const pool = new Pool({ connectionString });

export default pool;
