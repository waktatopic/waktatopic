"use strict";

import "../utils/loadEnv.js";
import path from "path";
import nodeMailer from "nodemailer";
import CustomError from "../utils/CustomError.js";

const clientPath = path.join(path.resolve(), "client");

function getHome(req, res, next) {
	try {
		res.status(200).sendFile(path.join(clientPath, "html", "home.html"));
	} catch (error) {
		next(error);
	}
}
async function postMail(req, res, next) {
	try {
		const { email, title, body } = req.body;
		const transporter = nodeMailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			auth: {
				user: process.env.MAILS_EMAIL,
				pass: process.env.MAILS_PWD,
			},
			secure: true,
		});
		const mailOption = {
			to: process.env.MAILS_EMAIL,
			subject: `[왁타토픽 문의 메일]${title}`,
			text: `보낸 사람 : ${email}\n메일 내용 : ${body}`,
		};
		await transporter.sendMail(mailOption);
		res.status(201).json({ status: "success", message: "email send success" });
	} catch (error) {
		next(error);
	}
}

export default { getHome, postMail };
