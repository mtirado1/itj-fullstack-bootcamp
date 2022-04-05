const commentsRepository = require('../repository/comment');

const commentsService = {
	getComments: async (request, response) => {
		const postId = request.params.postId;
		try {
			const comments = await commentsRepository.getComments(postId);
			response.json(comments);
		} catch(error) {
			console.log(error);
			response.status(500).json({message: "Internal Error"});
		}
	},

	createComment: async(request, response) => {
		const postId = request.params.postId;
		const comment = request.body;
		try {
			const newComment = await commentsRepository.createComment(postId, comment);
			response.json(newComment);
		} catch(error) {
			console.log(error);
			response.status(500).json({message: "Internal Error"});
		}
	},

	deleteComment: async (request, response) => {
		const {postId, commentId} = request.params;
		try {
			await commentsRepository.deleteComment(postId, commentId);
			response.status(204).send();
		} catch (error) {
			console.log(error);
			response.status(500).json({message: "Internal Error"});
		}
	},

	updateComment: async (request, response) => {
		const {postId, commentId} = request.params;
		const comment = request.body;
		try {
			const updatedComment = await commentsRepository.updateComment(postId, commentId, comment);
			if (!updatedComment) {
				response.status(404).json({ message: "Comment not found" });
			} else {
				response.json(updatedComment);
			}
		} catch (error) {
			console.log(error);
			response.status(500).json({message: "Internal Error"});
		}
	}
}

module.exports = commentsService;
