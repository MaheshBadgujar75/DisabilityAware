// src/services/scheme.service.js
import * as SchemeModel from "../models/scheme.model.js";

export const getAllSchemes = async ({
  disabilityId,
  q,
  page = 1,
  limit = 20,
}) => {
  const offset = (page - 1) * limit;
  const cacheKey = `schemes:${disabilityId || "all"}:${
    q || "none"
  }:${page}:${limit}`;

  try {
    if (Redis) {
      const cached = await Redis.get(cacheKey);
      if (cached) return JSON.parse(cached);
    }
  } catch {}

  const [items, total] = await Promise.all([
    SchemeModel.findAll({ disabilityId, q, limit, offset }),
    SchemeModel.countAll({ disabilityId, q }),
  ]);

  const data = { total, page, limit, items };

  try {
    if (Redis) await Redis.setex(cacheKey, 300, JSON.stringify(data));
  } catch {}

  return data;
};

export const getSchemeById = async (id) => {
  return await SchemeModel.findById(id);
};

export const createScheme = async (data) => {
  const id = await SchemeModel.create(data);
  return await SchemeModel.findById(id);
};

export const updateScheme = async (id, fields) => {
  const ok = await SchemeModel.update(id, fields);
  if (!ok) return null;
  return await SchemeModel.findById(id);
};

export const deleteScheme = async (id) => {
  return await SchemeModel.remove(id);
};
