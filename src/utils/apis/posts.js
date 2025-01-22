const fetchAllPosts = async () => {
    try {
        const response = await fetch('http://localhost:9999/fetch-posts');
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching posts: ', err);
    }
}

export default fetchAllPosts;