// src/controllers/disability.controller.js
import * as Model from "../models/disability.model.js";
import Joi from "joi";

const listSchema = Joi.object({
  q: Joi.string().allow("", null),
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(20),
});

export const list = async (req, res, next) => {
  try {
    const { error, value } = listSchema.validate(req.query);
    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const { q, page, limit } = value;
    const offset = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Model.findAll({ q, limit, offset }),
      Model.countAll(q),
    ]);

    res.json({
      success: true,
      data: { total, page, limit, items },
    });
  } catch (err) {
    next(err);
  }
};

export const getById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!id)
      return res.status(400).json({ success: false, message: "Invalid id" });

    const item = await Model.findById(id);
    if (!item)
      return res.status(404).json({ success: false, message: "Not found" });

    res.json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

export const getBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    if (!slug)
      return res.status(400).json({ success: false, message: "Slug required" });

    const item = await Model.findBySlug(slug);
    if (!item)
      return res.status(404).json({ success: false, message: "Not found" });

    res.json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};
