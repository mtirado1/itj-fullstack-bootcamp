import { Link } from "react-router-dom";

function Header({title, onCreate}) {
	return (
		<div id="header">
			<h1>{title}</h1>
			<nav id="navbar">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/create-post">Create Post</Link></li>
					<li><Link to="/posts">List of Posts</Link></li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
