"use strict";

import multer from "multer";

const fileStorge = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "files/");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});
const multerUpload = multer({
	storage: fileStorge,
	limits: {
		fileSize: 50 * 1024 * 1024,
	},
});

export default multerUpload;
