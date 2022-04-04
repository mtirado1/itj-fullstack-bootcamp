const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true
		},
		author: {
			type: String
		},
		body: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

const CommentModel = mongoose.model("Comment", CommentSchema);
module.exports = {Comment: CommentModel, CommentSchema: CommentSchema};
