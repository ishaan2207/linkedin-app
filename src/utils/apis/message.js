const fetchMessages = async (userId) => {
    try {
        const response = await fetch(`http://localhost:9999/fetch-message/${userId}`);
        const data = response.json();
        return data;
    } catch(err) {
        console.error('Error in fetching messages: ', err);
    }
}

export default fetchMessages;