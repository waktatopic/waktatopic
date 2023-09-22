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
		const error = new CustomError("Book Not Found", 404);
		throw error;
	}
});

export default { getBook };
