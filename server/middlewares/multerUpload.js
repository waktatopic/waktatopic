"use strict";

import multer from "multer";
import path from "path";

const fileStorge = multer.diskStorage({
	destination: (req, file, cb) => {
		const { form, type } = req.body;
		cb(null, path.join(req.app.get("clientPath"), "src", form, type, path.sep));
	},
	filename: (req, file, cb) => {
		cb(null, `${req.body.title}.${req.body.form}`);
	},
});
const multerUpload = multer({
	storage: fileStorge,
	limits: {
		fileSize: 50 * 1024 * 1024,
	},
});

export default multerUpload;
