import "./utils/loadEnv.js";
import express from "express";
import homeRoute from "./routes/homeRoute.js";
import aboutRoute from "./routes/aboutRoute.js";
import bookRoute from "./routes/bookRoute.js";
import adminRoute from "./routes/adminRoute.js";
import path from "path";
import notFound from "./middlewares/notFound.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import cookieParser from "cookie-parser";
import visitorSchedule from "./utils/visitorSchedule.js";
import dbConfig from "./utils/dbConfig.js";

dbConfig();

visitorSchedule.visitorJob;
visitorSchedule.trendJob;

const app = express();

app.set("clientPath", path.join(path.resolve(), "client"));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), "client")));

app.use("/", homeRoute);
app.use("/about", aboutRoute);
app.use("/book", bookRoute);
app.use("/admin", adminRoute);

app.use(notFound);
app.use(globalErrorHandler);

app.listen(process.env.PORT, () => {
	console.log(`Listening on PORT ${process.env.PORT}`);
});
