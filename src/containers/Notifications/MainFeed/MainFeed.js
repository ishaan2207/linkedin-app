// deps
import React, { useState } from "react";

// styles
import './MainFeed.css';

// components
import NotificationsToggle from "../../../components/Notifications/NotificationsToggle/NotificationsToggle";
import NotificationsFeed from "../../../components/Notifications/NotificationsFeed/NotificationsFeed";

function MainFeed() {
    const [selectedToggle, setSelectedToggle] = useState('all');
    return (
        <div>
            <NotificationsToggle setSelectedToggle={setSelectedToggle} />
            <NotificationsFeed selectedToggle={selectedToggle} />
        </div>
    )
}

export default MainFeed;