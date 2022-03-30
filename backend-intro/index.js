const express = require('express');

const app = express();
const PORT = 2400;

app.get('/', (request, response) => {
	response.json({title: "Hello!", content: "These are the contents"})
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
