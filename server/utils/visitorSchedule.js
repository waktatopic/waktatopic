"use strict";

import schedule from "node-schedule";
import Visitor from "../models/visitorModel.js";
import CustomError from "./CustomError.js";

const visitorJob = schedule.scheduleJob("0 24 * * *", async (fireDate) => {
	const visitor = await Visitor.create({
		book: [],
		keyword: [],
	});
	console.log(`Created ${visitor} document of ${fireDate}`);
});

const trendJob = schedule.scheduleJob("0 * * *", async (fireDate) => {
	console.log("인기 키워드 및 잡지 갱신 완료");
});

export default { visitorJob, trendJob };
