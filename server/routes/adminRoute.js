"use strict";

import "../utils/loadEnv.js";
import express from "express";
import adminController from "../controllers/adminController.js";
import tokenAuth from "../middlewares/tokenAuth.js";
import multerUpload from "../middlewares/multerUpload.js";

const router = express.Router();

router.get("/", tokenAuth, adminController.getAdmin);
router.get("/dashboard", tokenAuth, adminController.getDashboard);
router.get("/dashboard/book", tokenAuth, adminController.getBookDashboard);
router
	.route("/dashboard/book/list")
	.get(tokenAuth, adminController.getBookList)
	.post(tokenAuth, multerUpload.single("files"), adminController.postBookList)
	.put(tokenAuth, multerUpload.single("files"), adminController.putBookList)
	.delete(tokenAuth, adminController.deleteBookList);
router.get("/dashboard/profile", tokenAuth, adminController.getProfileDashboard);
router.post("/login", adminController.postLogin);

export default router;
