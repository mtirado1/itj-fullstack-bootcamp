function Post({post}) {
	return (
		<article className="post">
			<img src={post.image}></img>
			<h2>{post.title}</h2>
			<p className="metadata"><span>{post.date}</span><span>{post.author ?? "No author"}</span></p>
			<p>{post.content}</p>
		</article>
	);
}

export default Post;
