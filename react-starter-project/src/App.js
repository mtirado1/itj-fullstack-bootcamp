import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import FeaturedPost from './components/FeaturedPost'


function samplePost(title = "Sample Post") {
	return {
		title: title,
		image: "/poppy.jpg",
		date: "Mar 24, 2022",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. Amet nisl purus in mollis nunc sed id semper risus. Eget sit amet tellus cras adipiscing enim eu turpis."
	};
}


function App() {
	const [posts, setPosts] = useState([samplePost()]);
	const navigate = useNavigate();

	function addPost(newPost) {
		setPosts([newPost, ...posts]);
		navigate("/", {replace: true});
	}

	return (
	<div className="App">
	<Routes>
		<Route path="/" element={
			<>
			<Header title="My Blog"/>
			<FeaturedPost post={samplePost("Featured Post")}/>
			<PostList posts={posts}/>
			</>
		} />
		<Route path="create-post" element={
			<CreatePost onCreate={addPost} />
		} />
	</Routes>
	</div>
  );
}

export default App;
