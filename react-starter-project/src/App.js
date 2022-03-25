import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
		{Header(blogTitle)}
    </div>
  );
}

export default App;
