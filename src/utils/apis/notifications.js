const fetchNotifications = async () => {
    try {
        const response = await fetch('http://localhost:9999/fetch-notifs');
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching notifications: ', err);
    }
}

export { fetchNotifications }