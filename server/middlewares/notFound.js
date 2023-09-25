import CustomError from "../utils/CustomError.js";

function notFound(req, res, next) {
	const error = new CustomError("페이지를 찾을 수 없습니다.", 404);
	throw error;
}

export default notFound;
