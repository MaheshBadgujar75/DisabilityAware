// src/controllers/scheme.controller.js
import * as Service from "../services/scheme.service.js";
import Joi from "joi";

const listSchema = Joi.object({
  disabilityId: Joi.alternatives().try(
    Joi.number().integer().min(1),
    Joi.string()
  ),
  q: Joi.string().allow("", null),
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(200).default(20),
});

export const list = async (req, res, next) => {
  try {
    const { error, value } = listSchema.validate(req.query);
    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const data = await Service.getAllSchemes(value);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

export const getById = async (req, res, next) => {
  try {
    const scheme = await Service.getSchemeById(req.params.id);
    if (!scheme)
      return res
        .status(404)
        .json({ success: false, message: "Scheme not found" });
    res.json({ success: true, data: scheme });
  } catch (err) {
    next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    const created = await Service.createScheme(req.body);
    res.status(201).json({ success: true, data: created });
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const updated = await Service.updateScheme(req.params.id, req.body);
    if (!updated)
      return res
        .status(404)
        .json({ success: false, message: "Scheme not found" });
    res.json({ success: true, data: updated });
  } catch (err) {
    next(err);
  }
};

export const remove = async (req, res, next) => {
  try {
    const ok = await Service.deleteScheme(req.params.id);
    if (!ok)
      return res
        .status(404)
        .json({ success: false, message: "Scheme not found" });
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    next(err);
  }
};
