function errorHandler(error, req, res, next) {
	error.statusCode = error.statusCode || 500;
	error.status = error.status || "error";

	res.status(error.statusCode).json({
		status: error.statusCode,
		message: error.message,
		stackTrace: error.stack,
		error: error,
	});
}
export default errorHandler;
