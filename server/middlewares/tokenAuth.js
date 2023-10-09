"use strict";

import "../utils/loadEnv.js";
import jwt from "jsonwebtoken";
import CustomError from "../utils/CustomError.js";

function tokenAuth(req, res, next) {
	try {
		const token = req.cookies.token;
		const path = req.route.path;

		if (!token && path !== "/") {
			return res.redirect("/admin");
		} else if (token && path === "/") {
			return res.redirect("/admin/dashboard");
		} else if (!token && path === "/") {
			return next();
		}
		jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
			if (err) {
				res.clearCookie("token", token, {
					httpOnly: true,
					secure: true,
				});
				return res.redirect("/admin");
			}
			return next();
		});
	} catch (error) {
		next(error);
	}
}

export default tokenAuth;
