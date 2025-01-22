const fetchAllPosts = async () => {
    try {
        const response = await fetch('http://localhost:9999/fetch-posts');
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching posts: ', err);
    }
}

const createPost = async (post) => {
    try {
        console.log(post);
        const response = await fetch('http://localhost:9999/create-post', {
            method: 'POST',
            body: {
                postId: post.postId,
                postedBy: post.postedBy,
                postContent: post.postContent,
                userId: post.userId,
            }
        });

        const data = await response.json();
        console.log('Post creation successful: ', data);
    } catch (err) {
        console.error('Error in creating new post: ', err);
    }
}

export { fetchAllPosts, createPost };