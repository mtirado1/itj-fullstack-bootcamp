const {Post} = require('../models/post');
const {Comment} = require('../models/comment');

const commentsRepository = {
	getComments: async (postId) => {
		const post = await Post.findById(postId);
		return post.comments;
	},

	createComment: async(postId, comment) => {
		const post = await Post.findById(postId);
		const newComment = new Comment(comment);
		post.comments.push(newComment);
		post.save();
		return newComment;
	},

	deleteComment: async (postId, commentId) => {
		const post = await Post.findById(postId);
		post.comments.pull({_id: commentId});
		post.save();
	},

	updateComment: async (postId, commentId, comment) => {
		const post = await Post.findOneAndUpdate(
			{_id: postId, "comments._id": commentId},
			{
				$set: {
					"comments.$.title": comment.title,
					"comments.$.body": comment.body
				}
			},
			{ returnDocument: "after" }
		);
		const updatedComment = post.comments.find(comment => comment._id == commentId);
		return updatedComment;
	}
}

module.exports = commentsRepository;
