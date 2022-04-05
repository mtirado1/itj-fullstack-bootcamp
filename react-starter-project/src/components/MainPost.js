import { useParams } from "react-router-dom";
import postsApi from '../api/posts-api';
import { useState, useEffect, useCallback } from 'react'
import formatDate from '../utils';

function MainPost({getPost}) {
	const params = useParams();
	const {postId} = params;

	const [post, setPost] = useState({});

	const getPostDetails = useCallback(async id => {
		const post = await postsApi.getPost(id);
		if (post) {
			setPost(post);
		}
	}, []);

	useEffect(() => {
		getPostDetails(postId);
	}, [postId, getPostDetails]);

	return (
		<div className="mainPost">
		<h2>{post.title}</h2>
		<img src={post.image}></img>
			<p className="metadata">
				<span>{formatDate(post.createdAt)}</span>
				<span>{post.author || "No author"}</span>
			</p>
			<p>{post.body}</p>
		</div>
	)
}

export default MainPost;
