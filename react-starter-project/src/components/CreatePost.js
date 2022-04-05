import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import postsApi from '../posts-api';

const emptyPost = {
	title: "",
	author: "",
	body: ""
}

function CreatePost({onSave}) {
	const navigate = useNavigate();
	const {postId} = useParams();
	const [post, setPost] = useState(emptyPost);

	function isDisabled() {
		return post.title === ""
			|| post.body === "";
	}

	function updatePost(key, value) {
		const newPost = {...post};
		newPost[key] = value;
		setPost(newPost);
	}

	useEffect(() => {
		if (postId) {
			async function fetchData() {
				const newPost = await postsApi.getPost(postId);
				if (newPost) { setPost(newPost) }
			}
			fetchData();
		} else { setPost(emptyPost) }
	}, [postId]);

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
				onChange={(event) => updatePost("body", event.target.value)}
				type="textarea"
				name="Content"
				value={post.body}>
			</textarea>
			<h3>Author</h3>
			<input
				onChange={(event) => updatePost("author", event.target.value)}
				type="text"
				name="Author"
				value={post.author}>
			</input>
			<p className="flex-row">
				<button type="button" disabled={isDisabled()} onClick={() => {onSave(post, postId)}}>{postId ? "Update" : "Create"}</button>
				<button type="button" onClick={() => navigate("/")}>Cancel</button>
			</p>
		</form>
	);
}

export default CreatePost;
