import React, { useState, useEffect } from 'react';

function Header({title, onCreate}) {
	return (
		<div id="header">
			<h1>{title}</h1>
			<nav id="navbar">
				<ul>
					<li><button onClick={onCreate}>Create new post</button></li>
					<li><a href="list">View list of posts</a></li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
