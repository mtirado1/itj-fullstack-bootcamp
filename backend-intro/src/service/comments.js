const commentsRepository = require('../comments-repository');

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
	}
}

module.exports = commentsService;
