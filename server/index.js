import "./helpers/loadEnv.js";
import express from "express";
import homeRoute from "./routes/homeRoute.js";
import aboutRoute from "./routes/aboutRoute.js";
import bookRoute from "./routes/bookRoute.js";
import adminRoute from "./routes/adminRoute.js";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), "client")));

app.use("/", homeRoute);
app.use("/about", aboutRoute);
app.use("/book", bookRoute);
app.use("/admin", adminRoute);

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
