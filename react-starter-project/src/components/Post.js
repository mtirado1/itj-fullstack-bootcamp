function Post({post}) {
	return (
		<article className="post">
			<img src={post.img}></img>
			<h2>{post.title}</h2>
			<p className="date">{post.date}</p>
			<p>{post.content}</p>
		</article>
	);
}

export default Post;
