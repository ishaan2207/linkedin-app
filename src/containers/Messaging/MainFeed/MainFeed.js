import React from "react";
import './MainFeed.css';
import MessagesFeed from "../../../components/Messaging/MessagesFeed/MessagesFeed";

function MainFeed({ messages }) {
    return (
        <div className="messagingMainFeedContainer">
            <MessagesFeed messages={messages} />
        </div>
    )
}

export default MainFeed;