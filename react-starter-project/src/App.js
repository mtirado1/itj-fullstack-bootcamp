import './App.css';

const blogTitle = "A Blog";

function Header(title) {
	return (
		<div id="header">
			<h1>{title}</h1>
			<nav id="navbar">
				<ul>
					<li><a href="new">Create new post</a></li>
					<li><a href="list">View list of posts</a></li>
				</ul>
			</nav>
		</div>
	);
}

function samplePost() {
	return {
		title: "Sample post",
		img: "poppy.jpg",
		date: "Mar 24, 2022",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. Amet nisl purus in mollis nunc sed id semper risus. Eget sit amet tellus cras adipiscing enim eu turpis."
	};
}

function FeaturedPost(post) {
	return (
		<div id="featured">
			<img src={post.img}></img>
			<h2>{post.title}</h2>
			<p className="date">{post.date}</p>
			<p>{post.content}</p>
		</div>
	);
}

function App() {
  return (
    <div className="App">
		{Header(blogTitle)}
		{FeaturedPost(samplePost())}
    </div>
  );
}

export default App;
