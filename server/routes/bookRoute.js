"use strict";

import "../utils/loadEnv.js";
import express from "express";
import bookController from "../controllers/bookController.js";

const router = express.Router();

router.get("/:type/:title", bookController.getBook);

export default router;
