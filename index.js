const express = require("express");
const path = require("path");

const initialPath = path.join(__dirname, "public");

const app = express();

app.use(express.static(initialPath));

app.get("/", (req, res) => {
	res.sendFile(path.join(initialPath, "html", "home.html"));
});

app.get("/book", (req, res) => {
	res.sendFile(path.join(initialPath, "html", "book.html"));
});

app.listen("3000", () => {
	console.log("listening on port 3000");
});
