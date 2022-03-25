import Post from "./Post"

function FeaturedPost({post}) {
	return (
		<div id="featured">
			<Post post={post}/>
		</div>
	);
}

export default FeaturedPost;
