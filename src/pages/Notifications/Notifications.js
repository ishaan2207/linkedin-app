// deps
import React from "react";

// styles
import './Notifications.css';

// components
import LeftPane from "../../containers/Notifications/LeftPane/LeftPane";
import MainFeed from "../../containers/Notifications/MainFeed/MainFeed";
import RightPane from "../../containers/Notifications/RightPane/RightPane";

function Notifications() {
    return (
        <div className="notificationsContainer">
            <div className="notificationsLeftPane">
                <LeftPane />
            </div>
            <div className="notificationsMainFeed">
                <MainFeed />
            </div>
            <div className="notificationsRightPane">
                <RightPane />
            </div>
        </div>
    )
}

export default Notifications;