
function PostIndex({posts}) {
	return (
		<div><ul>
			{posts.map(post =>
				<li><b>{post.date}:</b> {post.title}</li>
			)}
		</ul></div>
	);
}

export default PostIndex;
