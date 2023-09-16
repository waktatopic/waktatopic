import "./src/helpers/loadEnv.js";
import express from "express";
import homeRoute from "./src/routes/homeRoute.js";
import bookRoute from "./src/routes/bookRoute.js";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), "public")));

app.use("/", homeRoute);
app.use("/book", bookRoute);

app.use((req, res, next) => {
	res.status(404).json({ message: "404 Not Found" });
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: "Something broke!" });
});

app.listen(process.env.PORT, () => {
	console.log(`Listening on PORT ${process.env.PORT}`);
});
