import "./src/helpers/loadEnv.js";
import express from "express";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const initialPath = path.join(__dirname, "public");
const app = express();

app.use(express.static(initialPath));

app.get("/", (req, res) => {
	res.sendFile(path.join(initialPath, "html", "home.html"));
});

app.get("/book", (req, res) => {
	res.sendFile(path.join(initialPath, "html", "book.html"));
});

app.listen(process.env.PORT, () => {
	console.log(`Listening on PORT ${process.env.PORT}`);
});
