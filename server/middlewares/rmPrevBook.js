"use strict";

import fs from "fs";
import path from "path";
import dbConfig from "../dbConfig/dbConfig.js";
import Book from "../models/bookModel.js";
import CustomError from "../utils/CustomError.js";

dbConfig();

async function rmPrevBook(req, res, next) {
	try {
		const { type, title } = req.body;
		const prevBook = await Book.findOne({ type: type, title: title });
		console.log(prevBook);
		if (!prevBook) {
			const error = new CustomError("DB에서 기존 책을 찾을 수 없습니다", 400);
			throw error;
		}
		fs.rmdir(
			path.join(req.app.get("clientPath"), "src", "thumbnail", prevBook.type, prevBook.title),
			{
				recursive: true,
				force: true,
			},
			(err) => {
				const error = new CustomError("기존 썸네일을 찾을 수 없습니다", 400);
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
				const error = new CustomError("기존 썸네일을 찾을 수 없습니다", 400);
				throw error;
			}
		);
		next();
	} catch (error) {
		next(error);
	}
}

export default rmPrevBook;
