"use strict";

import "../utils/loadEnv.js";
import express from "express";
import adminController from "../controllers/adminController.js";
import tokenAuth from "../middlewares/tokenAuth.js";

const router = express.Router();

router.get("/", tokenAuth, adminController.getAdmin);
router.get("/pannel", tokenAuth, adminController.getPannel);
router.get("/pannel/banner", tokenAuth, adminController.getBannerPannel);
router.get("/pannel/book", tokenAuth, adminController.getBookPannel);
router
	.route("/pannel/book/list")
	.get(tokenAuth, adminController.getBookList)
	.post(tokenAuth, adminController.postBookList);
router.get("/pannel/profile", tokenAuth, adminController.getProfilePannel);
router.post("/login", adminController.postLogin);

export default router;
