"use strict";

import "../utils/loadEnv.js";
import path from "path";
import fs from "fs";
import CustomError from "../utils/CustomError.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";

const clientPath = path.join(path.resolve(), "client");

const getBook = asyncErrorHandler(async (req, res, next) => {
	const { type, name } = req.params;
	if (fs.existsSync(path.join(clientPath, "pdf", type, `${name}.pdf`))) {
		res.status(200).sendFile(path.join(clientPath, "html", "book.html"));
	} else {
		const error = new CustomError("페이지를 찾을 수 없습니다. 주소를 확인해주세요", 404);
		throw error;
	}
});

export default { getBook };
