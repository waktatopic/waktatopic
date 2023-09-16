"use strict";

import "../../src/helpers/loadEnv.js";
import express from "express";
import path from "path";
// import bookController from "../controllers/bookController.js";

const router = express.Router();
const publicPath = path.join(path.resolve(), "public");

router.get("/", (req, res, next) => {
	res.sendFile(path.join(publicPath, "html", "book.html"));
});

export default router;
