import "./src/helpers/loadEnv.js";
import express from "express";
import homeRoute from "./src/routes/homeRoute.js";
import bookRoute from "./src/routes/bookRoute.js";
import path from "path";

const app = express();

app.use(express.static(path.join(path.resolve(), "public")));

app.use("/", homeRoute);
app.use("/book", bookRoute);

app.listen(process.env.PORT, () => {
	console.log(`Listening on PORT ${process.env.PORT}`);
});
