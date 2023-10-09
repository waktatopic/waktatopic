"use strict";

import "../utils/loadEnv.js";
import path from "path";
import CustomError from "../utils/CustomError.js";
import Book from "../models/bookModel.js";
import Visitor from "../models/visitorModel.js";

async function getBook(req, res, next) {
	try {
		const { type, title } = req.params;
		const today = new Date();
		const year = today.getFullYear();
		const month = today.getMonth();
		const date = today.getDate();
		const book = await Book.findOne({ type: type, title: title, showAt: { $lte: today } });
		if (book) {
			const visitor = await Visitor.findOne({
				createdAt: { $gte: new Date(year, month, date), $lt: new Date(year, month, date + 1) },
			});
			if (visitor) {
				const bookVisitor = [...visitor.book];
				const keywordVisitor = [...visitor.keyword];
				const bookIndex = bookVisitor.findIndex((data) => data.type === book.type && data.title === book.title);
				bookIndex !== -1
					? (bookVisitor[bookIndex].viewCount = bookVisitor[bookIndex].viewCount + 1)
					: bookVisitor.push({ type: book.type, title: book.title, viewCount: 1 });

				book.keyword.forEach((word) => {
					const keywordIndex = keywordVisitor.findIndex((data) => data.word === word);
					keywordIndex !== -1
						? (keywordVisitor[keywordIndex].viewCount = keywordVisitor[keywordIndex].viewCount + 1)
						: keywordVisitor.push({ word: word, viewCount: 1 });
				});
				await Visitor.updateOne(
					{
						createdAt: { $gte: new Date(year, month, date), $lt: new Date(year, month, date + 1) },
					},
					{
						book: bookVisitor,
						keyword: keywordVisitor,
					}
				);
			}
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
