import "./utils/loadEnv.js";
import express from "express";
import homeRoute from "./routes/homeRoute.js";
import aboutRoute from "./routes/aboutRoute.js";
import bookRoute from "./routes/bookRoute.js";
import adminRoute from "./routes/adminRoute.js";
import path from "path";
import notFound from "./middlewares/notFound.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";

const app = express();

app.use(express.json());
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
