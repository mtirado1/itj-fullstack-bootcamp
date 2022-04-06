import { Link } from "react-router-dom";
import formatDate from '../utils';

function PostIndex({posts}) {
	if ((posts ?? []).length === 0) {
		return <h2>No posts available</h2>
	}
	return (
		<>
		<h2>List of Posts</h2>
		<ul className="post-list">
			{posts.map(post =>
				<li>
					<span>{formatDate(post.createdAt)}:</span> <Link to={`/posts/${post._id}`}>{post.title}</Link>
				</li>
			)}
		</ul>
		</>
	);
}

export default PostIndex;
