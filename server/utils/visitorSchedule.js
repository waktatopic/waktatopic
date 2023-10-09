"use strict";

import schedule from "node-schedule";
import Visitor from "../models/visitorModel.js";
import CustomError from "./CustomError.js";

function visitorSchedule() {
	schedule.scheduleJob("0 * * * *", async () => {
		try {
			const today = new Date();
			const year = today.getFullYear();
			const month = today.getMonth();
			const date = today.getDate();
			const visitor = await Visitor.findOne({
				createdAt: { $gte: new Date(year, month, date), $lt: new Date(year, month, date + 1) },
			});
			if (!visitor) {
				await Visitor.create({
					book: [],
					keyword: [],
				});
				console.log("Created today's visitor document");
			}
			const visitorLogs = await Visitor.find({
				createdAt: {
					$gte: new Date(year, month, date - 7),
					$lt: new Date(year, month, date + 1),
				},
			});
			const bookVisitor = [];
			const keywordVisitor = [];
			visitorLogs.forEach((log) => {
				log.book.forEach((book) => {
					const bookIndex = bookVisitor.findIndex(
						(data) => data.type === book.type && data.title === book.title
					);
					bookIndex !== -1
						? (bookVisitor[bookIndex].viewCount = bookVisitor[bookIndex].viewCount + 1)
						: bookVisitor.push(book);
				});
				log.keyword.forEach((keyword) => {
					const keywordIndex = keywordVisitor.findIndex((data) => data.word === keyword.word);
					keywordIndex !== -1
						? (keywordVisitor[keywordIndex].viewCount = keywordVisitor[keywordIndex].viewCount + 1)
						: keywordVisitor.push(keyword);
				});
			});
			bookVisitor.sort((a, b) => b.viewCount - a.viewCount);
			keywordVisitor.sort((a, b) => b.viewCount - a.viewCount);
			const trend = {
				book: bookVisitor,
				keyword: keywordVisitor,
			};
			console.log(trend);
		} catch (error) {
			next(error);
		}
	});
}

export default visitorSchedule;
