import { Link } from "react-router-dom";

function PostIndex({posts}) {
	return (
		<p><ul>
			{posts.map((post, index) =>
				<li>
					<b>{post.date}:</b> <Link to={`/posts/${index}`}>{post.title}</Link>
				</li>
			)}
		</ul></p>
	);
}

export default PostIndex;
