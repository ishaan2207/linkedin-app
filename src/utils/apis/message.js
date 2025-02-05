import { PRODUCTION_URL, LOCAL_URL } from "./constants";

const fetchMessages = async (userId) => {
    try {
        const response = await fetch(`${LOCAL_URL}/fetch-message/${userId}`);
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching messages: ', err);
    }
}

const updateMessage = async (id, message) => {
    const reqBody = {
        text: message.text,
        timeSent: message.timeSent,
        senderId: message.senderId,
        senderName: message.senderName,
    };
    try {
        const response = await fetch(`${LOCAL_URL}/update-message/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody),
        })

        const data = response.json();
        console.log('Successfully updated message: ', data);
    } catch (err) {
        console.error('Error in updating messages: ', err);
    }
}

export { fetchMessages, updateMessage };