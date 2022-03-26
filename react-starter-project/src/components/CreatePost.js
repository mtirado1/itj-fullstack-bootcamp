import React, { useState, useEffect } from 'react';

function CreatePost({onCreate}) {
	const initialPost = {
		title: "",
		content: "",
		author: "",
		date: ""
	};

	const [post, setPost] = useState(initialPost);

	return (
		<form>
			<h1>Create Post</h1>
			<h2>Title</h2>
				<input
					onChange={(event) => setPost({title: event.target.value})}
					type="text"
					name="title"
					placeholder="Add a title..."
					value={post.title}>
				</input>
			<h2>Content</h2>
				<input
					onChange={(event) => setPost({content: event.target.value})}
					type="textarea"
					name="content"
					value={post.content}>
				</input>
			<h3>Author</h3>
				<input
					onChange={(event) => setPost({author: event.target.value})}
					type="text"
					name="author"
					value={post.author}>
				</input>
			<p><button onClick={onCreate}>Create</button></p>
		</form>
	);
}

export default CreatePost;
