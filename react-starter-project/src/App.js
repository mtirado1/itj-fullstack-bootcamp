import React, { useState, useEffect } from 'react';

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
	const [isCreating, setCreation] = useState(false);

	function addPost(newPost) {
		setPosts([newPost, ...posts]);
		setCreation(false);
	}

	return (
	<div className="App">
	{
		isCreating ? (
			<CreatePost
				onCreate={(newPost) => addPost(newPost)}
				onCancel={() => setCreation(false)}
			/>
		) : (
			<>
			<Header title="My Blog" onCreate={() => setCreation(true)}/>
			<FeaturedPost post={samplePost("Featured Post")}/>
			<PostList posts={posts}/>
			</>
		)
	}
    </div>
  );
}

export default App;
