// src/config/db.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

let pool = null;

export const connectDB = async () => {
  if (pool) return pool;

  pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: Number(process.env.DB_CONN_LIMIT) || 10,
    queueLimit: 0,
  });

  // test a simple query
  await pool.query("SELECT 1");
  console.log("✅ MySQL pool created and tested.");
  return pool;
};

export const getPool = () => {
  if (!pool)
    throw new Error("MySQL pool not initialized. Call connectDB() first.");
  return pool;
};
