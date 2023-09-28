"use strict";

import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
	title: { type: String, require: [true, "제목을 입력해주세요"] },
	type: { type: String, require: [true, "종류를 입력해주세요"] },
	keyword: { type: [String], require: [true, "키워드를 입력해주세요"] },
	cafe: { type: String, require: [true, "카페 링크를 입력해주세요"] },
	viewCount: { type: Number, require: true, default: 0 },
	showAt: { type: Date, require: [true, "공개 일시를 입력해주세요"] },
	uploadDate: { type: Date, require: [true, "업로드 날짜를 입력해주세요"] },
});

BookSchema.set("timestamps", { createdAt: true, updatedAt: true });

const Book = mongoose.model("Book", BookSchema);

export default Book;
