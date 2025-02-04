import { PRODUCTION_URL } from "./constants";

const fetchTrendingNow = async () => {
    try {
        const response = await fetch(`${PRODUCTION_URL}/fetch-trending`);
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching trending now: ', err);
    }
}

export { fetchTrendingNow };