"use strict";

import "../utils/loadEnv.js";
import path from "path";

function getAbout(req, res, next) {
	try {
		res.status(200).sendFile(path.join(req.app.get("clientPath"), "html", "about.html"));
	} catch (error) {
		next(error);
	}
}

export default { getAbout };
