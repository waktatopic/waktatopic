"use strict";

import mongoose from "mongoose";

const VisitorSchema = mongoose.Schema({
	book: { type: Array, require: true },
	keyword: { type: Array, require: true },
});

VisitorSchema.set("timestamps", { createdAt: true, updatedAt: true });

const Visitor = mongoose.model("Visitor", VisitorSchema);

export default Visitor;
