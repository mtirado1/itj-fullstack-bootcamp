const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require('dotenv').config();

const postsService = require('./service/posts');
const commentsService = require('./service/comments');
const PORT = 2400;

function connectDatabase() {
	try {
		mongoose.connect(process.env.DB_URI);
		console.log("Database connected.");
	} catch(error) {
		console.log(error);
	}
}

const commentsRouter = express.Router();
commentsRouter.route('/')
	.get(commentsService.getComments)
	.post(commentsService.createComment);
commentsRouter.route('/:commentId')
	.delete(commentsService.deleteComment);

const postsRouter = express.Router();
postsRouter.route('/')
	.get(postsService.getPosts)
	.post(postsService.createPost);
postsRouter.route('/:postId')
	.get(postsService.getPostById)
	.delete(postsService.deletePost)
	.put(postsService.updatePost);
postsRouter.use('/:postId/comments', commentsRouter);

app.use(express.json());
app.use(cors());
app.use('/posts', postsRouter);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
	connectDatabase();
});
