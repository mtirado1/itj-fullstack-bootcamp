import Post from './Post'

function PostList({posts, onDelete}) {
	if (posts.length > 0) {
		return (
			<div className="posts">
				{posts.map(post => <Post key={post._id} post={post} onDelete={onDelete}/>)}
			</div>
		);
	} else {
		return (
			<div className="posts">
				<h2>No posts available</h2>
			</div>
		);
	}

}

export default PostList;
