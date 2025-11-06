// src/services/cache.service.js
import redis from "../config/redis.js";

export const getCached = async (key) => {
  const raw = await redis.get(key);
  return raw ? JSON.parse(raw) : null;
};

export const setCached = async (key, value, ttlSeconds = 60) => {
  if (value === undefined) return;
  await redis.set(key, JSON.stringify(value), "EX", ttlSeconds);
};

export const delCached = async (key) => {
  await redis.del(key);
};
