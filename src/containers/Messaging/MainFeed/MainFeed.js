// deps
import React from "react";

// styles
import './MainFeed.css';

// components
import MessagesFeed from "../../../components/Messaging/MessagesFeed/MessagesFeed";

function MainFeed({ messages }) {
    return (
        <div className="messagingMainFeedContainer">
            <MessagesFeed messages={messages} />
        </div>
    )
}

export default MainFeed;