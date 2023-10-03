"use strict";

import "../utils/loadEnv.js";
import express from "express";
import adminController from "../controllers/adminController.js";
import tokenAuth from "../middlewares/tokenAuth.js";
import multerUpload from "../middlewares/multerUpload.js";

const router = express.Router();

router.get("/", tokenAuth, adminController.getAdmin);
router.get("/pannel", tokenAuth, adminController.getPannel);
router.get("/pannel/book", tokenAuth, adminController.getBookPannel);
router
	.route("/pannel/book/list")
	.get(tokenAuth, adminController.getBookList)
	.post(tokenAuth, multerUpload.single("files"), adminController.postBookList)
	.put(tokenAuth, multerUpload.single("files"), adminController.putBookList)
	.delete(tokenAuth, adminController.deleteBookList);
router.get("/pannel/profile", tokenAuth, adminController.getProfilePannel);
router.post("/login", adminController.postLogin);

export default router;
