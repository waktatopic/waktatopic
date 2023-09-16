"use strict";

import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
	username: { type: String, require: true },
	password: { type: String, require: true },
});

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;
