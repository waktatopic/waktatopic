"use strict";

import "../utils/loadEnv.js";
import express from "express";
import adminController from "../controllers/adminController.js";

const router = express.Router();

router.get("/", adminController.getAdmin);
router.post("/login", adminController.postLogin);

export default router;
