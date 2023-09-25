"use strict";

import "../utils/loadEnv.js";
import path from "path";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConfig from "../dbConfig/dbConfig.js";
import Admin from "../models/adminModel.js";
import Book from "../models/bookModel.js";
import CustomError from "../utils/CustomError.js";

dbConfig();

const clientPath = path.join(path.resolve(), "client");

function getAdmin(req, res, next) {
	try {
		res.status(200).sendFile(path.join(clientPath, "html", "admin", "admin.html"));
	} catch (error) {
		next(error);
	}
}

function getPannel(req, res, next) {
	try {
		res.status(200).sendFile(path.join(clientPath, "html", "admin", "pannel.html"));
	} catch (error) {
		next(error);
	}
}

function getBannerPannel(req, res, next) {
	try {
		res.status(200).sendFile(path.join(clientPath, "html", "admin", "bannerPannel.html"));
	} catch (error) {
		next(error);
	}
}

function getBookPannel(req, res, next) {
	try {
		res.status(200).sendFile(path.join(clientPath, "html", "admin", "bookPannel.html"));
	} catch (error) {
		next(error);
	}
}

async function getBookList(req, res, next) {
	try {
		const bookList = await Book.find();
		res.status(200).json({ status: "success", bookList: bookList });
	} catch (error) {
		next(error);
	}
}

async function postBookList(req, res, next) {
	try {
		res.status(200).json({ status: "success", message: "니가 원한게 이거냐?" });
	} catch (error) {
		next(error);
	}
}

function getProfilePannel(req, res, next) {
	try {
		res.status(200).sendFile(path.join(clientPath, "html", "admin", "profilePannel.html"));
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
		const token = jwt.sign({ username: user.username }, process.env.TOKEN_SECRET, { expiresIn: "3h" });
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
