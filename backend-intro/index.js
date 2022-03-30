const express = require('express');

const app = express();
const PORT = 2400;

app.get('/', (request, response) => {
	response.json({title: "Hello!", content: "These are the contents"})
});

app.get('/post/:postId', (request, response) => {
	const postId = request.params.postId;
	response.json({title: "A post", id: postId});
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
