// src/services/disability.service.js
import * as model from "../models/disability.model.js";
import { getCached, setCached } from "./cache.service.js";

export const list = async ({ q, page = 1, limit = 20 }) => {
  const offset = (Number(page) - 1) * Number(limit);
  const cacheKey = `disabilities:list:${q || "all"}:${page}:${limit}`;
  const cached = await getCached(cacheKey);
  if (cached) return cached;

  const [rows, total] = await Promise.all([
    model.findAll({ q, limit, offset }),
    model.countAll(q),
  ]);

  const result = {
    items: rows,
    total,
    page: Number(page),
    limit: Number(limit),
  };
  await setCached(cacheKey, result, 60);
  return result;
};

export const getById = model.findById;
export const getBySlug = model.findBySlug;
