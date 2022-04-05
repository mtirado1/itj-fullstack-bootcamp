
const URL = "http://localhost:2400"

const postsApi = {
	getPosts,
	getPost,
	createPost,
	deletePost,
	updatePost
};

async function jsonRequest(path, method = "GET", body = null) {
	const params = {
		method: method,
		headers: { "Content-Type": "application/json" }
	};
	if (body !== null) {
		params.body = JSON.stringify(body);
	}
	return await fetch(URL + path, params);
}

jsonRequest.get = async (path, body = null) => jsonRequest(path, "GET", body);
jsonRequest.post = async (path, body = null) => jsonRequest(path, "POST", body);
jsonRequest.put = async (path, body = null) => jsonRequest(path, "PUT", body);
jsonRequest.delete = async (path, body = null) => jsonRequest(path, "DELETE", body);

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
