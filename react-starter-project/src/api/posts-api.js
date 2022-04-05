import JSONRequest from './json-request';

const URL = "http://localhost:2400"

const postsApi = {
	getPosts,
	getPost,
	createPost,
	deletePost,
	updatePost
};

const jsonRequest = new JSONRequest(URL);

async function getPosts() {
	try {
		const response = await jsonRequest.get("/posts");
		if (response.status === 200) {
			return response.json();
		} else {
			return null;
		}
	} catch(error) {
		console.log(error);
	}
}

async function getPost(postId) {
	try {
		const response = await jsonRequest.get("/posts/" + postId);
		return (response.status === 200) ? response.json() : null;
	} catch(error) {
		console.log(error);
	}
}

async function createPost(post) {
	try {
		const response = await jsonRequest.post("/posts", post);
		if (response.status === 201) {
			return response.json();
		} else {
			return null;
		}
	} catch(error) {
		console.log(error);
	}
}

async function deletePost(postId) {
	try {
		const response = await jsonRequest.delete("/posts/" + postId);
		return (response.status === 204);
	} catch(error) {
		console.log(error);
	}
}

async function updatePost(postId, post) {
	try {
		const response = await jsonRequest.put("/posts/" + postId, post);
		return response.json();
	} catch(error) {
		console.log(error);
	}
}

export default postsApi;
