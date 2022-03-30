import { Link } from "react-router-dom";

function PostIndex({posts}) {
	return (
		<div><ul>
			{posts.map((post, index) =>
				<li>
					<b>{post.date}:</b> <Link to={`/posts/${index}`}>{post.title}</Link>
				</li>
			)}
		</ul></div>
	);
}

export default PostIndex;
