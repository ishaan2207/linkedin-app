const fetchJobs = async () => {
    try {
        const response = await fetch('http://localhost:9999/fetch-jobs');
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching jobs: ', err);
    }
}

export { fetchJobs };