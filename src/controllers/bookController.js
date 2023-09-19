"use strict";

import "../helpers/loadEnv.js";
import path from "path";
import fs from "fs";

const publicPath = path.join(path.resolve(), "public");

function getBook(req, res, next) {
	try {
		const { type, name } = req.params;
		if (fs.existsSync(path.join(publicPath, "pdf", type, `${name}.pdf`))) {
			res.status(200).sendFile(path.join(publicPath, "html", "book.html"));
		} else {
			res.status(404).json({ message: "404 Not Found" });
		}
	} catch (err) {
		next(err);
	}
}

export default { getBook };
