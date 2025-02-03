// deps
import React from "react";

// styles
import './MessagingPage.css';

// containers
import MainFeed from "../../../containers/Messaging/MainFeed/MainFeed";
import RightPane from "../../../containers/Messaging/RightPane/RightPane";

function MessagingPage({ messages }) {
    console.log('messages',messages)
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