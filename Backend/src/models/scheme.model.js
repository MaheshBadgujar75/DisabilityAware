// src/models/scheme.model.js
import { getPool } from "../config/db.js";

export const findAll = async ({
  disabilityId,
  q,
  limit = 20,
  offset = 0,
} = {}) => {
  const pool = getPool();
  const params = [];
  let sql = `
    SELECT id, title_en, title_mr, description_en, description_mr,
           applicable_disability_ids, govt_link, created_at, updated_at
    FROM schemes
  `;

  const where = [];
  if (disabilityId) {
    where.push(`FIND_IN_SET(?, applicable_disability_ids)`);
    params.push(String(disabilityId));
  }

  if (q) {
    where.push(
      `(title_en LIKE ? OR title_mr LIKE ? OR description_en LIKE ? OR description_mr LIKE ?)`
    );
    const like = `%${q}%`;
    params.push(like, like, like, like);
  }

  if (where.length) sql += " WHERE " + where.join(" AND ");
  sql += " ORDER BY created_at DESC LIMIT ? OFFSET ?";
  params.push(Number(limit), Number(offset));

  const [rows] = await pool.query(sql, params);
  return rows;
};

export const countAll = async ({ disabilityId, q } = {}) => {
  const pool = getPool();
  const params = [];
  let sql = `SELECT COUNT(*) AS total FROM schemes`;
  const where = [];

  if (disabilityId) {
    where.push(`FIND_IN_SET(?, applicable_disability_ids)`);
    params.push(String(disabilityId));
  }

  if (q) {
    where.push(
      `(title_en LIKE ? OR title_mr LIKE ? OR description_en LIKE ? OR description_mr LIKE ?)`
    );
    const like = `%${q}%`;
    params.push(like, like, like, like);
  }

  if (where.length) sql += " WHERE " + where.join(" AND ");

  const [rows] = await pool.query(sql, params);
  return rows[0].total;
};

export const findById = async (id) => {
  const pool = getPool();
  const [rows] = await pool.query("SELECT * FROM schemes WHERE id = ?", [id]);
  return rows[0];
};

export const create = async (data) => {
  const pool = getPool();
  const [result] = await pool.query(
    `INSERT INTO schemes (title_en, title_mr, description_en, description_mr, applicable_disability_ids, govt_link)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [
      data.title_en,
      data.title_mr,
      data.description_en,
      data.description_mr,
      data.applicable_disability_ids,
      data.govt_link,
    ]
  );
  return result.insertId;
};

export const update = async (id, fields) => {
  const pool = getPool();
  const sets = [];
  const params = [];

  for (const [k, v] of Object.entries(fields)) {
    sets.push(`${k} = ?`);
    params.push(v);
  }

  if (!sets.length) return false;
  params.push(id);

  const sql = `UPDATE schemes SET ${sets.join(", ")} WHERE id = ?`;
  const [res] = await pool.query(sql, params);
  return res.affectedRows > 0;
};

export const remove = async (id) => {
  const pool = getPool();
  const [res] = await pool.query("DELETE FROM schemes WHERE id = ?", [id]);
  return res.affectedRows > 0;
};
