// src/validations/disability.validation.js
import Joi from "joi";

export const listSchema = Joi.object({
  q: Joi.string().allow("", null),
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(20),
});

export const idParam = Joi.object({
  id: Joi.number().integer().required(),
});

export const slugParam = Joi.object({
  slug: Joi.string().required(),
});
