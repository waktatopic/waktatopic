"use strict";

import schedule from "node-schedule";
import Visitor from "../models/visitorModel.js";
import CustomError from "./CustomError.js";

const visitorJob = schedule.scheduleJob("0 0 * * *", async (fireDate) => {
	try {
		const visitor = await Visitor.create({
			book: [],
			keyword: [],
		});
		console.log(`Created ${fireDate} document, ${visitor}`);
	} catch (error) {
		next(error);
	}
});

const trendJob = schedule.scheduleJob("0 * * *", async (fireDate) => {
	console.log("인기 키워드 및 잡지 갱신 완료");
});

export default { visitorJob, trendJob };
