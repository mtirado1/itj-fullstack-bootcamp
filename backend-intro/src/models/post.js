const {CommentSchema} = require('./comment');
const mongoose = require("mongoose");

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
module.exports = {Post: PostModel};
