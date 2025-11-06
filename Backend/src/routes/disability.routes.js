// src/routes/disability.routes.js
import express from "express";
import * as ctrl from "../controllers/disability.controller.js";

const router = express.Router();

router.get("/", ctrl.list);
router.get("/slug/:slug", ctrl.getBySlug);
router.get("/:id", ctrl.getById);

export default router;
