class CustomError extends Error {
	constructor(message, status) {
		super(message);
		this.statusCode = status;
		this.status = status >= 400 && status < 500 ? "fail" : "error";
		this.isOperational = true;
		Error.captureStackTrace(this, this.constructor);
	}
}

export default CustomError;
