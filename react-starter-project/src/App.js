// React + Router
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Components
import Header from './components/Header'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostIndex from './components/PostIndex'
import FeaturedPost from './components/FeaturedPost'
import MainPost from './components/MainPost'

// API
import postsApi from './posts-api'

function App() {
	const blogTitle = "My Blog"
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		getPosts();
	}, []);

	async function getPosts() {
		const posts = await postsApi.getPosts();
		setPosts(posts, []);
	}

	async function deletePost(postId) {
		const deletedPost = await postsApi.deletePost(postId);
		if (deletedPost) {
			setPosts(posts.filter(post => post._id !== postId));
		}
	}

	async function savePost(post, postId) {
		if (postId) {
			const updatedPost = await postsApi.updatePost(postId, post);
			const otherPosts = posts.filter(post => post._id !== postId);
			setPosts([updatedPost, ...otherPosts]);
		} else {
			const createdPost = await postsApi.createPost(post);
			setPosts([createdPost, ...posts]);
		}
		navigate("/", {replace: true});
	}

	return (
	<div className="App">
	<Header title={blogTitle}/>
	<Routes>
		<Route path="/" element={
			<>
			<PostList posts={posts} onDelete={deletePost}/>
			</>
		} />
		<Route path="create-post" element={
			<CreatePost onSave={savePost} />
		} />
		<Route path="edit-post/:postId" element={
			<CreatePost onSave={savePost} />
		} />
		<Route path="posts/:postId" element={
			<MainPost getPost={postsApi.getPost}/>
		} />
		<Route path="posts" element={
			<>
			<h2>List of Posts</h2>
			<PostIndex posts={posts}/>
			</>
		}/>
		<Route path="*" element={
			<h2>Page not Found</h2>
		} />
	</Routes>
	</div>
  );
}

export default App;
