"use strict";

import mongoose from "mongoose";

const ProfileSchema = mongoose.Schema({
	name: { type: String, require: true },
	role: {
		team: { type: String, require: true },
		level: { type: Number, require: true },
	},
	text: { type: String },
	sns: {
		wakzoo: { type: String, require: true, default: "" },
		facebook: { type: String, require: true, default: "" },
		instagram: { type: String, require: true, default: "" },
		youtube: { type: String, require: true, default: "" },
		notion: { type: String, require: true, default: "" },
	},
	createDate: { type: Date, require: true, default: Date.now, immutable: true },
	updateDate: { type: Date, require: true, default: Date.now },
});

const Profile = mongoose.model("Profile", ProfileSchema);

export default Profile;
