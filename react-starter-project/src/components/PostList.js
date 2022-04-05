
import Post from './Post'

function PostList({posts, onDelete}) {
	return (
		<div className="posts">
			{posts.map(post => <Post post={post} onDelete={onDelete}/>)}
		</div>
	);
}

export default PostList;
