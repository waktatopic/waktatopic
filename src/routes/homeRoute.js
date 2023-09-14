import "../../src/helpers/loadEnv.js";
import express from "express";
import path from "path";
import homeController from "../controllers/homeController.js";

const router = express.Router();
const publicPath = path.join(path.resolve(), "public");

router.get("/", (req, res, next) => {
	res.sendFile(path.join(publicPath, "html", "home.html"));
});

export default router;
