"use strict";

import "../utils/loadEnv.js";
import path from "path";

const clientPath = path.join(path.resolve(), "client");

function getAbout(req, res, next) {
	try {
		res.status(200).sendFile(path.join(clientPath, "html", "about.html"));
	} catch (error) {
		next(error);
	}
}

export default { getAbout };
