const fetchNotifications = async () => {
    try {
        const response = await fetch('http://localhost:9999/fetch-notifs');
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching notifications: ', err);
    }
}

const updateNotifications = async (notificationId) => {
    try {
        const response = await fetch(`http://localhost:9999/update-notifs/${notificationId}`, {
            method: 'PUT',
        });

        const data = response.json();
        console.log('Notification updated successfully: ', data);
    } catch (err) {
        console.error('Error in updating notification: ', err);
    }
}

const deleteNotification = async (notificationId) => {
    try {
        const response = await fetch(`http://localhost:9999/delete-notifs/${notificationId}`, {
            method: 'DELETE',
        });

        const data = response.json();
        console.log('Notification successfully deleted: ', data);
    } catch (err) {
        console.error('Error in deleting notification: ', err);
    }
}

export { fetchNotifications, updateNotifications, deleteNotification };