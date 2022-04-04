const postsRepository = require('../repository/post');

const postsService = {
	getPosts: async (request, response) => {
		try {
			const posts = await postsRepository.getPosts();
			response.json(posts);
		} catch(error) {
			console.log(error);
			response.status(500).json({message: "Internal Error"});
		}
	},

	getPostById: async (request, response) => {
		const postId = request.params.postId;
		try {
			const post = await postsRepository.getPostById(postId);
			if (!post) {
				return response.status(404).json("Post not found");
			}
			response.json(post);
		} catch(error) {
			console.log(error);
			response.status(500).json({message: "Internal Error"});
		}
	},

	createPost: async (request, response) => {
		const newPost = request.body;
		console.log(request.body);
		try {
			const createdPost = await postsRepository.createPost(newPost);
			response.status(201).json(createdPost);
		} catch(error) {
			console.log(error);
			response.status(500).json({message: "Internal Error"});
		}
	},

	deletePost: async (request, response) => {
		const postId = request.params.postId;
		try {
			await postsRepository.deletePost(postId);
			response.status(204).send();
		} catch(error) {
			console.log(error);
			response.status(500).json({message: "Internal Error"});
		}
	},

	updatePost: async (request, response) => {
		const postId = request.params.postId;
		const post = request.body;
		try {
			const updatedPost = await postsRepository.updatePost(postId, post);
			if (!updatedPost) {
				response.status(404).json({ message: "Post not found" });
			}
			response.json(updatedPost);
		} catch(error) {
			console.log(error);
			response.status(500).json({message: "Internal Error"});
		}
	}
}

module.exports = postsService;
