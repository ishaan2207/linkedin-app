import { PRODUCTION_URL } from "./constants";

const fetchMessages = async (userId) => {
    try {
        const response = await fetch(`${PRODUCTION_URL}/fetch-message/${userId}`);
        const data = response.json();
        return data;
    } catch(err) {
        console.error('Error in fetching messages: ', err);
    }
}

export default fetchMessages;