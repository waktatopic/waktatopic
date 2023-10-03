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
					book.type === "weeklywak"
						? "주간왁물원"
						: book.type === "shonenwakdu"
						? "소년왁두"
						: book.type === "gamekinga"
						? "게임킹아"
						: "특집호"
				} ${book.title}`,
				title: book.title,
				type: book.type,
				keyword: book.keyword,
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
		const { title, type, keyword, showTime, showDate, uploadDate } = req.body;
		const pdfArray = await pdf2img.convert(
			path.join(req.app.get("clientPath"), "src", "pdf", type, `${title}.pdf`),
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
			showAt: showAt,
			uploadDate: uploadDate,
		});
		res.status(200).json({ status: "success", message: `${bookCreated} 생성 완료` });
	} catch (error) {
		next(error);
	}
}

async function putBookList(req, res, next) {
	try {
		const { title, type, keyword, showTime, showDate, uploadDate } = req.body;
		if (req.file) {
			const pdfArray = await pdf2img.convert(
				path.join(req.app.get("clientPath"), "src", "pdf", type, `${title}.pdf`),
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
		}
		const keywordArray = keyword ? keyword.split(",") : [];
		const showAt = showDate && showTime ? Date.parse(`${showDate},${showTime}`) : Date.now();
		const bookUpdated = await Book.findOneAndUpdate(
			{ title: title, type: type },
			{
				title: title,
				type: type,
				keyword: keywordArray,
				showAt: showAt,
				uploadDate: uploadDate,
			}
		);
		res.status(200).json({ status: "success", message: `${bookUpdated} 수정 완료` });
	} catch (error) {
		next(error);
	}
}

async function deleteBookList(req, res, next) {
	try {
		const { type, title } = req.body;
		const book = await Book.findOneAndDelete({ type: type, title: title });
		if (!book) {
			const error = new CustomError("DB에서 해당 데이터를 파일을 찾을 수 없습니다");
			throw error;
		}
		fs.unlink(path.join(req.app.get("clientPath"), "src", "thumbnail", type, `${title}.png`), (error) => {
			if (error) {
				const error = new CustomError("썸네일 파일을 찾을 수 없습니다");
				throw error;
			}
		});
		fs.unlink(path.join(req.app.get("clientPath"), "src", "pdf", type, `${title}.pdf`), (error) => {
			if (error) {
				const error = new CustomError("PDF 파일을 찾을 수 없습니다");
				throw error;
			}
		});
		res.status(200).json({ status: "success", message: `${book} 삭제 완료` });
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
	getBookPannel,
	getBookList,
	postBookList,
	putBookList,
	deleteBookList,
	getProfilePannel,
	postLogin,
};
