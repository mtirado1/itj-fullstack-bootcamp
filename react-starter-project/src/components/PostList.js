
import Post from './Post'

function PostList({posts}) {
	return (
		<div className="posts">
			{posts.map(post => <Post post={post}/>)}
		</div>
	);
}

export default PostList;
