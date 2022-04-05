import { Link } from "react-router-dom";
import formatDate from '../utils';

function PostIndex({posts}) {
	return (
		<ul className="post-list">
			{posts.map(post =>
				<li>
					<span>{formatDate(post.createdAt)}:</span> <Link to={`/posts/${post._id}`}>{post.title}</Link>
				</li>
			)}
		</ul>
	);
}

export default PostIndex;
