function Header({title}) {
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

export default Header;
