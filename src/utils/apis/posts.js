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
        const reqBody = {
            postId: post.postId,
            postedBy: post.postedBy,
            postContent: post.postContent,
            userId: post.userId,
        }

        const response = await fetch('http://localhost:9999/create-post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody),
        });

        const data = await response.json();
        console.log('Post creation successful: ', data);
    } catch (err) {
        console.error('Error in creating new post: ', err);
    }
}

const deletePost = async (postId) => {
    try {
        const response = await fetch(`http://localhost:9999/delete-post/${postId}`, {
            method: 'DELETE',
        });

        const data = response.json();
        console.log('Deleted post: ', data);
    } catch (err) {
        console.error('Error in deleting post: ', err);
    }
}

const updatePost = async (post) => {
    try {
        const reqBody = {
            postContent: post.postContent,
        }

        const response = await fetch(`http://localhost:9999/update-post/${post.postId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody),
        })

        const data = response.json();
        console.log('Updated post successfully: ', data);
    } catch (err) {
        console.error('Error in updating post: ', err);
    }
}

const likePost = async (post) => {
    try {
        const reqBody = {
            likedByUser: post.likedByUser,
        }
        const response = await fetch(`http://localhost:9999/update-post/${post.postId}/like`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody),
        })

        const data = response.json();
        console.log('Updated likes successfully: ', data);
    } catch (err) {
        console.error('Error in liking post: ', err);
    }
}

export { fetchAllPosts, createPost, deletePost, updatePost, likePost };