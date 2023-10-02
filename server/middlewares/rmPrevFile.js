"use strict";

import fs from "fs";
import path from "path";
import dbConfig from "../dbConfig/dbConfig.js";
import Book from "../models/bookModel.js";
import CustomError from "../utils/CustomError.js";

dbConfig();

async function rmPrevFile(req, res, next) {
	const { type, title } = req.body;
	const prevBook = await Book.findOne({ type: type, title: title });
	fs.rmdir(
		path.join(req.app.get("clientPath"), "src", "thumbnail", prevBook.type, prevBook.title),
		{
			recursive: true,
			force: true,
		},
		(err) => {
			const error = new CustomError("기존 썸네일을 찾을 수 없습니다", 404);
			throw error;
		}
	);
	fs.rmdir(
		path.join(req.app.get("clientPath"), "src", "pdf", prevBook.type, prevBook.title),
		{
			recursive: true,
			force: true,
		},
		(err) => {
			const error = new CustomError("기존 썸네일을 찾을 수 없습니다", 404);
			throw error;
		}
	);
	next();
}

export default rmPrevFile;
