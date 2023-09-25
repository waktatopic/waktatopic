"use strict";

import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
	title: { type: String, require: [true, "title is required"] },
	type: { type: String, require: [true, "type is required"] },
	keyword: { type: [String], require: true, default: [] },
	cafe: { type: String, require: true, default: "https://cafe.naver.com/steamindiegame" },
	viewCount: { type: Number, require: true, default: 0 },
	createDate: { type: Date, require: true, default: Date.now, immutable: true },
	updateDate: { type: Date, require: true, default: Date.now },
});

const Book = mongoose.model("Book", BookSchema);

export default Book;
