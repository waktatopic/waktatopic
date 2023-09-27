"use strict";

import path from "path";

const clientPath = path.join(path.resolve(), "client");

function errorHandler(error, req, res, next) {
	error.statusCode = error.statusCode || 500;
	error.status = error.status || "error";

	if (error.statusCode === 404) {
		res.status(404).sendFile(path.join(clientPath, "html", "notFound.html"));
	} else {
		res.status(error.statusCode).json({
			status: error.statusCode,
			message: error.message,
			stackTrace: error.stack,
			error: error,
		});
	}
}
export default errorHandler;
