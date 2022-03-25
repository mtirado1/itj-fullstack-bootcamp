import Header from './components/Header'
import PostList from './components/PostList'
import FeaturedPost from './components/FeaturedPost'

function samplePost() {
	return {
		title: "Sample post",
		img: "/poppy.jpg",
		date: "Mar 24, 2022",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. Amet nisl purus in mollis nunc sed id semper risus. Eget sit amet tellus cras adipiscing enim eu turpis."
	};
}

function makePosts(count) {
	const posts = [];
	for(var i = 0; i < count; i++) {
		posts.push(samplePost());
	}
	return posts;
}

function App() {
  return (
    <div className="App">
		<Header title="My Blog"/>
		<FeaturedPost post={samplePost()}/>
		<PostList posts={makePosts(5)}/>
    </div>
  );
}

export default App;
