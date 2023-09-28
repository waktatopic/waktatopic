"use strict";

import "../utils/loadEnv.js";
import path from "path";
import fs from "fs";
import CustomError from "../utils/CustomError.js";
import Book from "../models/bookModel.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";

async function getBook(req, res, next) {
	try {
		const { type, title } = req.params;
		const book = await Book.findOne({ type: type, title: title });
		if (book && Date.parse(book.showAt) < Date.now()) {
			res.status(200).sendFile(path.join(req.app.get("clientPath"), "html", "book.html"));
		} else {
			const error = new CustomError("페이지를 찾을 수 없습니다.", 404);
			throw error;
		}
	} catch (error) {
		next(error);
	}
}

export default { getBook };
