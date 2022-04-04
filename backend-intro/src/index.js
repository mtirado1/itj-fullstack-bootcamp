const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require('dotenv').config();

const postsService = require('./service/posts');
const commentsService = require('./service/comments');

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

app.get('/posts', postsService.getPosts);
app.get('/posts/:postId', postsService.getPostById);
app.post('/posts', postsService.createPost);
app.delete('/posts/:postId', postsService.deletePost);
app.put('/posts/:postId', postsService.updatePost);

app.get('/posts/:postId/comments', commentsService.getComments);
app.post('/posts/:postId/comments', commentsService.createComment);
app.delete('/posts/:postId/comments/:commentId', commentsService.deleteComment);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
	connectDatabase();
});
