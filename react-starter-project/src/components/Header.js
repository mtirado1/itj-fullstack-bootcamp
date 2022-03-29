import { Link } from "react-router-dom";

function Header({title, onCreate}) {
	return (
		<div id="header">
			<h1>{title}</h1>
			<nav id="navbar">
				<ul>
					<li><Link to="/create-post">Create Post</Link></li>
					<li><a href="list">View list of posts</a></li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
