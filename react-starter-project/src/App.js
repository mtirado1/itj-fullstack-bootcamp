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

function makePosts(count) {
	const posts = [];
	for(var i = 0; i < count; i++) {
		posts.push(samplePost(`Sample post ${i + 1}`));
	}
	return posts;
}

function App() {
	const [isCreating, setCreation] = useState(false);
	return (
	<div className="App">
		<Header title="My Blog" onCreate={() => setCreation(true)}/>
		{
			isCreating ? <CreatePost onCreate={() => setCreation(false)}/> :
			<FeaturedPost post={samplePost("Featured Post")}/>
		}
		<PostList posts={makePosts(5)}/>
    </div>
  );
}

export default App;
