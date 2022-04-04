
const {Post} = require('./models/post');

const postsRepository = {
	getPosts: async () => {
		const posts = await Post.find().lean().exec();
		return posts;
	},

	createPost: async(post) => {
		const newPost = new Post(post);
		await newPost.save();
		return newPost;
	},

	getPostById: async (id) => {
		const post = await Post.findById(id).lean().exec();
		return post;
	},

	updatePost: async(id, post) => {
		const updatedPost = await Post.findByIdAndUpdate(id, post, {
    		returnDocument: "after",
		}).lean().exec();
		return updatedPost;
	},

	deletePost: async (id) => {
		await Post.findByIdAndDelete(id).exec();
	}
}

module.exports = postsRepository;
