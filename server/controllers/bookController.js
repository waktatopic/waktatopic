"use strict";

import "../helpers/loadEnv.js";
import path from "path";
import fs from "fs";

const clientPath = path.join(path.resolve(), "client");

function getBook(req, res, next) {
	try {
		const { type, name } = req.params;
		if (fs.existsSync(path.join(clientPath, "pdf", type, `${name}.pdf`))) {
			res.status(200).sendFile(path.join(clientPath, "html", "book.html"));
		} else {
			res.status(404).json({ message: "404 Not Found" });
		}
	} catch (err) {
		next(err);
	}
}

export default { getBook };
