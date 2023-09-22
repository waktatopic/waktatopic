"use strict";

import mongoose from "mongoose";

const BannerSchema = mongoose.Schema({
	banner: { type: String, require: [true, "banner image required"] },
	link: { type: String, require: true, default: "" },
});

const Banner = mongoose.model("Banner", BannerSchema);

export default Banner;
