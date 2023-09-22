"use strict";

import "../utils/loadEnv.js";
import express from "express";
import homeController from "../controllers/homeController.js";

const router = express.Router();

router.get("/", homeController.getHome);
router.post("/", homeController.postMail);

export default router;
