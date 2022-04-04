const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true
		},
		author: {
			type: String,
			required: true
		},
		body: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);


const PostSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true
		},
		body: {
			type: String,
			required: true
		},
		imageUrl: {
			type: String
		},
		author: {
			type: String
		},
		comments: [CommentSchema]
	},
	{ timestamps: true }
);

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;
