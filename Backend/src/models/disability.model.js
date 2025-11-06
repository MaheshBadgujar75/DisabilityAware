// src/models/disability.model.js
import { getPool } from "../config/db.js";

/**
 * findAll - returns array of disabilities with pagination + optional search
 * @param {Object} opts { q, limit=20, offset=0 }
 */
export const findAll = async ({ q, limit = 20, offset = 0 } = {}) => {
  const pool = getPool();
  const params = [];
  let sql = `SELECT id, slug, title_en, title_mr, short_desc_en, short_desc_mr, image_url, created_at
             FROM disabilities`;

  if (q) {
    sql += ` WHERE title_en LIKE ? OR title_mr LIKE ? OR short_desc_en LIKE ? OR short_desc_mr LIKE ?`;
    const like = `%${q}%`;
    params.push(like, like, like, like);
  }

  sql += " ORDER BY created_at DESC LIMIT ? OFFSET ?";
  params.push(Number(limit), Number(offset));

  const [rows] = await pool.query(sql, params);
  return rows;
};

export const countAll = async (q) => {
  const pool = getPool();
  const params = [];
  let sql = "SELECT COUNT(*) AS total FROM disabilities";
  if (q) {
    sql += " WHERE title_en LIKE ? OR title_mr LIKE ?";
    const like = `%${q}%`;
    params.push(like, like);
  }
  const [rows] = await pool.query(sql, params);
  return rows[0].total;
};

export const findById = async (id) => {
  const pool = getPool();
  const [rows] = await pool.query("SELECT * FROM disabilities WHERE id = ?", [
    id,
  ]);
  return rows[0];
};

export const findBySlug = async (slug) => {
  const pool = getPool();
  const [rows] = await pool.query("SELECT * FROM disabilities WHERE slug = ?", [
    slug,
  ]);
  return rows[0];
};
