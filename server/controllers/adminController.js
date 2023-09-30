"use strict";

import "../utils/loadEnv.js";
import path from "path";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pdf2img from "pdf-img-convert";
import fs from "fs";
import dbConfig from "../dbConfig/dbConfig.js";
import Admin from "../models/adminModel.js";
import Book from "../models/bookModel.js";
import CustomError from "../utils/CustomError.js";

dbConfig();

function getAdmin(req, res, next) {
	try {
		res.status(200).sendFile(path.join(req.app.get("clientPath"), "html", "admin", "admin.html"));
	} catch (error) {
		next(error);
	}
}

function getPannel(req, res, next) {
	try {
		res.status(200).sendFile(path.join(req.app.get("clientPath"), "html", "admin", "pannel.html"));
	} catch (error) {
		next(error);
	}
}

function getBannerPannel(req, res, next) {
	try {
		res.status(200).sendFile(path.join(req.app.get("clientPath"), "html", "admin", "bannerPannel.html"));
	} catch (error) {
		next(error);
	}
}

function getBookPannel(req, res, next) {
	try {
		res.status(200).sendFile(path.join(req.app.get("clientPath"), "html", "admin", "bookPannel.html"));
	} catch (error) {
		next(error);
	}
}

async function getBookList(req, res, next) {
	try {
		const bookList = await Book.find().lean();
		const newBookList = bookList.map((book) => {
			return (book = {
				name: `${
					book.type === "weeklywak" ? "주간왁물원" : book.type === "shonenwakdu" ? "소년왁두" : "특집호"
				} ${book.title}`,
				title: book.title,
				type: book.type,
				keyword: book.keyword,
				cafe: book.cafe,
				viewCount: book.viewCount,
				showDate: book.showAt.toISOString().substr(0, 10),
				showTime: book.showAt.toISOString().substr(11, 5),
				uploadDate: book.uploadDate.toISOString().substr(0, 10),
			});
		});

		res.status(200).json({ status: "success", bookList: newBookList });
	} catch (error) {
		next(error);
	}
}

async function postBookList(req, res, next) {
	try {
		const { form, title, type, keyword, cafe, showTime, showDate, uploadDate } = req.body;
		const pdfArray = await pdf2img.convert(
			path.join(req.app.get("clientPath"), "src", form, type, `${title}.pdf`),
			{
				page_numbers: [1],
				scale: 0.4,
			}
		);
		fs.writeFile(
			path.join(req.app.get("clientPath"), "src", "thumbnail", type, `${title}.png`),
			pdfArray[0],
			(error) => {
				if (error) {
					console.log(error);
				}
			}
		);

		const keywordArray = keyword ? keyword.split(",") : [];
		const showAt = showDate && showTime ? Date.parse(`${showDate},${showTime}`) : Date.now();
		const bookCreated = await Book.create({
			title: title,
			type: type,
			keyword: keywordArray,
			cafe: cafe || "https://cafe.naver.com/steamindiegame",
			showAt: showAt,
			uploadDate: uploadDate,
		});
		res.status(200).json({ status: "success", message: `${bookCreated} 생성 완료` });
	} catch (error) {
		next(error);
	}
}

function getProfilePannel(req, res, next) {
	try {
		res.status(200).sendFile(path.join(req.app.get("clientPath"), "html", "admin", "profilePannel.html"));
	} catch (error) {
		next(error);
	}
}

async function postLogin(req, res, next) {
	try {
		const { username, password } = req.body;
		const user = await Admin.findOne({ username: username });
		if (!user) {
			const error = new CustomError("아이디를 확인해주세요", 400);
			throw error;
		}
		const pwCompare = await bcrypt.compare(password, user.password);
		if (!pwCompare) {
			const error = new CustomError("비밀번호를 확인해주세요", 400);
			throw error;
		} else {
		}
		const token = jwt.sign({ username: user.username }, process.env.TOKEN_SECRET, { expiresIn: "1d" });
		res.cookie("token", token, { httpOnly: true, secure: true });
		res.status(201).json({ status: "success", message: "로그인 성공" });
	} catch (error) {
		next(error);
	}
}

export default {
	getAdmin,
	getPannel,
	getBannerPannel,
	getBookPannel,
	getBookList,
	postBookList,
	getProfilePannel,
	postLogin,
};
