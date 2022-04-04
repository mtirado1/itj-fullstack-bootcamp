const {Post, Comment} = require('./models/post');

const commentsRepository = {
	getComments: async (postId) => {
		const post = await Post.findById(postId);
		return post.comments;
	},

	createComment: async(postId, comment) => {
		const post = await Post.findById(postId);
		const newComment = new Comment(comment)
		post.comments.push(newComment);
		post.save();
		return newComment;
	}
}

module.exports = commentsRepository;
