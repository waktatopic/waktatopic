"use strict";

import "../helpers/loadEnv.js";
import path from "path";

const clientPath = path.join(path.resolve(), "client");

function getAdmin(req, res, next) {
	try {
		res.status(200).sendFile(path.join(clientPath, "html", "admin.html"));
	} catch (err) {
		next(err);
	}
}

export default { getAdmin };
