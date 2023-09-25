"use strict";

import "../utils/loadEnv.js";
import path from "path";
import fs from "fs";
import CustomError from "../utils/CustomError.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";

const clientPath = path.join(path.resolve(), "client");

async function getBook(req, res, next) {
	try {
		const { type, title } = req.params;
		if (fs.existsSync(path.join(clientPath, "pdf", type, `${title}.pdf`))) {
			res.status(200).sendFile(path.join(clientPath, "html", "book.html"));
		} else {
			const error = new CustomError("페이지를 찾을 수 없습니다.", 404);
			throw error;
		}
	} catch (error) {
		next(error);
	}
}

export default { getBook };
