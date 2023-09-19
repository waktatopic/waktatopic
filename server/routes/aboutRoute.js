"use strict";

import "../helpers/loadEnv.js";
import express from "express";
import aboutController from "../controllers/aboutController.js";

const router = express.Router();

router.get("/", aboutController.getAbout);

export default router;
