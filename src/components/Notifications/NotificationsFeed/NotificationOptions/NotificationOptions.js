// deps
import React from "react";

// styles
import './NotificationOptions.css';

// components
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

function NotificationOptions({ selectedNotification, notificationId, markAsRead, handleDelete }) {
    return (
        <div className="notificationOptionsContainer" style={{ display: selectedNotification._id === notificationId ? 'block' : 'none' }}>
            <div className="notificationOptionButton" onClick={() => handleDelete(selectedNotification._id)}>
                <span><DeleteIcon /></span>
                <p>Delete notification</p>
            </div>
            <div className="notificationOptionButton" onClick={() => markAsRead(selectedNotification)}>
                <span><VisibilityIcon /></span>
                <p>Mark as read</p>
            </div>
        </div>
    )
}

export default NotificationOptions;