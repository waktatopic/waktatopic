"use strict";

import "../utils/loadEnv.js";
import path from "path";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConfig from "../dbConfig/dbConfig.js";
import Admin from "../models/adminModel.js";
import CustomError from "../utils/CustomError.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";

dbConfig();

const clientPath = path.join(path.resolve(), "client");

const getAdmin = asyncErrorHandler(async (req, res, next) => {
	res.status(200).sendFile(path.join(clientPath, "html", "admin", "admin.html"));
});

const postLogin = asyncErrorHandler(async (req, res, next) => {
	const { username, password } = req.body;
	const user = await Admin.find({ username: username });
	if (user.length === 0) {
		const error = new CustomError("Check your ID", 400);
		throw error;
	}
	const pwCompare = await bcrypt.compare(password, user[0].password);
	if (pwCompare) {
		const tokenSecret = process.env.TOKEN_SECRET;
		const token = jwt.sign(
			{
				type: "JWT",
				username: username,
			},
			tokenSecret,
			{
				expiresIn: "1h",
			}
		);
		res.status(201).json({ message: "로그인 성공", token: token });
	} else {
		const error = new CustomError("Check your PW", 400);
		throw error;
	}
});

export default { getAdmin, postLogin };
