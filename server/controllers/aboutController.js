"use strict";

import "../utils/loadEnv.js";
import path from "path";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";

const clientPath = path.join(path.resolve(), "client");

const getAbout = asyncErrorHandler(async (req, res, next) => {
	res.status(200).sendFile(path.join(clientPath, "html", "about.html"));
});

export default { getAbout };
