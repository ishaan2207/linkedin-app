const fetchNotifications = async () => {
    try {
        const response = await fetch('http://localhost:9999/fetch-notifs');
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching notifications: ', err);
    }
}

const updateNotifications = async (notification) => {
    try {
        const response = await fetch(`http://localhost:9999/update-notifs/${notification._id}`, {
            method: 'PUT',
        });

        const data = response.json();
        console.log('Notification updated successfully: ', data);
    } catch (err) {
        console.error('Error in updating notification: ', err);
    }
}

export { fetchNotifications, updateNotifications };