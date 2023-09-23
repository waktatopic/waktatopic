import path from "path";

const clientPath = path.join(path.resolve(), "client");

function notFound(req, res, next) {
	res.status(404).sendFile(path.join(clientPath, "html", "notFound.html"));
}

export default notFound;
