"use strict";

import "../helpers/loadEnv.js";
import path from "path";
import nodeMailer from "nodemailer";

const publicPath = path.join(path.resolve(), "public");

function getHome(req, res, next) {
	res.status(200).sendFile(path.join(publicPath, "html", "home.html"));
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
			from: email,
			to: process.env.MAILS_EMAIL,
			subject: `[왁타토픽 문의 메일]${title}`,
			text: body,
		};
		await transporter.sendMail(mailOption);
		res.status(201).json({ message: "email send success" });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: "email send failed" });
	}
}

export default { getHome, postMail };
