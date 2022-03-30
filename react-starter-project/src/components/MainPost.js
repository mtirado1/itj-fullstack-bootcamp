import { useParams } from "react-router-dom";

function MainPost({getPost}) {
	const params = useParams();
	const post = getPost(params.postId);
	return (
		<div className="mainPost">
		<h2>{post.title}</h2>
		<img src={post.image}></img>
			<p className="metadata"><span>{post.date}</span><span>{post.author || "No author"}</span></p>

			<p>{post.content}</p>
		</div>
	)
}

export default MainPost;
