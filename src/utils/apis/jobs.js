import { PRODUCTION_URL } from "./constants";

const fetchJobs = async () => {
    try {
        const response = await fetch(`${PRODUCTION_URL}/fetch-jobs`);
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching jobs: ', err);
    }
}

export { fetchJobs };