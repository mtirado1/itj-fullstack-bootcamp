import React, { useState, useEffect } from 'react';

function CreatePost({onCreate, onCancel}) {
	const initialPost = {
		title: "",
		content: "",
		author: "",
		date: ""
	};

	const [post, setPost] = useState(initialPost);

	function isDisabled() {
		return post.title === "" || post.content === "";
	}

	function updatePost(key, value) {
		const newPost = {...post};
		newPost[key] = value;
		setPost(newPost);
	}

	return (
		<form>
			<h1>Create Post</h1>
			<h2>Title</h2>
			<input
				onChange={(event) => updatePost("title", event.target.value)}
				type="text"
				name="Title"
				placeholder="Add a title..."
				value={post.title}>
			</input>
			<h2>Content</h2>
			<textarea
				onChange={(event) => updatePost("content", event.target.value)}
				type="textarea"
				name="Content"
				value={post.content}>
			</textarea>
			<h3>Author</h3>
			<input
				onChange={(event) => updatePost("author", event.target.value)}
				type="text"
				name="Author"
				value={post.author}>
			</input>
			<p class="flex-row">
				<button type="button" disabled={isDisabled()} onClick={() => {onCreate(post)}}>Create</button>
				<button type="button" onClick={onCancel}>Cancel</button>
			</p>
		</form>
	);
}

export default CreatePost;
