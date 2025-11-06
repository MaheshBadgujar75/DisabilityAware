// src/app.js
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import disabilityRoutes from "./routes/disability.routes.js";
import schemeRoutes from "./routes/scheme.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json({ limit: "5mb" }));
app.use(morgan("dev"));

const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(apiLimiter);

app.get("/health", (req, res) => res.json({ success: true, status: "ok" }));

app.use("/api/disabilities", disabilityRoutes);
app.use("/api/schemes", schemeRoutes);

app.use(errorHandler);

export default app;
