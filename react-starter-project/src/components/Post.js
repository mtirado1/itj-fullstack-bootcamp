import formatDate from '../utils';
import { useNavigate } from 'react-router-dom';

function Post({post, onDelete}) {
	const navigate = useNavigate();
	const postId = post._id;

	return (
		<article className="post">
			<button onClick={() => navigate(`/edit-post/${postId}`)}>Edit</button>
			<button onClick={() => onDelete(postId)}>Delete</button>
			<img src={post.image}></img>
			<h2>{post.title}</h2>
			<p className="metadata"><span>{formatDate(post.createdAt)}</span><span>{post.author || "No author"}</span></p>
			<p>{post.body}</p>
		</article>
	);
}

export default Post;
