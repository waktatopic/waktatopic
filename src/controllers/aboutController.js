"use strict";

import "../helpers/loadEnv.js";
import path from "path";

const publicPath = path.join(path.resolve(), "public");

function getAbout(req, res, next) {
	try {
		res.status(200).sendFile(path.join(publicPath, "html", "about.html"));
	} catch (err) {
		next(err);
	}
}

export default { getAbout };
