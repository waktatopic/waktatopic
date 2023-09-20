"use strict";

import "../helpers/loadEnv.js";
import express from "express";
import adminController from "../controllers/adminController.js";

const router = express.Router();

router.get("/", adminController.getAdmin);

export default router;
