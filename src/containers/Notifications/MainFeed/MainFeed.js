import React from "react";
import './MainFeed.css';
import NotificationsToggle from "../../../components/Notifications/NotificationsToggle/NotificationsToggle";
import NotificationsFeed from "../../../components/Notifications/NotificationsFeed/NotificationsFeed";

function MainFeed() {
    return (
        <div>
            <NotificationsToggle />
            <NotificationsFeed />
        </div>
    )
}

export default MainFeed;