"use strict";

import "../helpers/loadEnv.js";
import path from "path";
import nodeMailer from "nodemailer";

const publicPath = path.join(path.resolve(), "public");

function getHome(req, res, next) {
	try {
		res.status(200).sendFile(path.join(publicPath, "html", "home.html"));
	} catch (err) {
		next(err);
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
		console.log(email);
		const mailOption = {
			to: process.env.MAILS_EMAIL,
			subject: `[왁타토픽 문의 메일]${title}`,
			text: `보낸 사람 : ${email}\n메일 내용 : ${body}`,
		};
		await transporter.sendMail(mailOption);
		res.status(201).json({ message: "email send success" });
	} catch (err) {
		next(err);
	}
}

export default { getHome, postMail };
