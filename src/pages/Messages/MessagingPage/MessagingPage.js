import React from "react";
import './MessagingPage.css';
import MainFeed from "../../../containers/Messaging/MainFeed/MainFeed";
import RightPane from "../../../containers/Messaging/RightPane/RightPane";

function MessagingPage({ messages }) {
    return (
        <div className="messagingPageContainer">
            <div className="messagingMainFeed">
                <MainFeed messages={messages} />
            </div>
            <div className="messagingRightPane">
                <RightPane />
            </div>
        </div>
    )
}

export default MessagingPage;