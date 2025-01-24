const fetchTrendingNow = async () => {
    try {
        const response = await fetch('http://localhost:9999/fetch-trending');
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching trending now: ', err);
    }
}

export { fetchTrendingNow };