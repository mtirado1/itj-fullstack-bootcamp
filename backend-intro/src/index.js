const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require('dotenv').config();

const postsRepository = require('./posts-repository');
const PORT = 2400;
app.use(express.json());
app.use(cors());

function connectDatabase() {
	try {
		mongoose.connect(process.env.DB_URI);
		console.log("Database connected.");
	} catch(error) {
		console.log(error);
	}
}

app.get('/posts', async (request, response) => {
	try {
		const posts = await postsRepository.getPosts();
		response.json(posts);
	} catch(error) {
		console.log(error);
		response.status(500).json({message: "Internal Error"});
	}
});

app.get('/posts/:postId', async (request, response) => {
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
});

app.post('/posts', async (request, response) => {
	const newPost = request.body;
	console.log(request.body);
	try {
		const createdPost = await postsRepository.createPost(newPost);
		response.status(201).json(createdPost);
	} catch(error) {
		console.log(error);
		response.status(500).json({message: "Internal Error"});
	}
});

app.delete('/posts/:postId', async (request, response) => {
	const postId = request.params.postId;
	try {
		await postsRepository.deletePost(postId);
		response.status(204).send();
	} catch(error) {
		console.log(error);
		response.status(500).json({message: "Internal Error"});
	}
});

app.put('/posts/:postId', async (request, response) => {
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
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
	connectDatabase();
});
