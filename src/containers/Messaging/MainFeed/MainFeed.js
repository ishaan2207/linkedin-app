// deps
import React from "react";

// styles
import './MainFeed.css';

// components
import MessagesFeed from "../../../components/Messaging/MessagesFeed/MessagesFeed";

function MainFeed({ messages, setAllMessages }) {
    return (
        <div className="messagingMainFeedContainer">
            <MessagesFeed messages={messages} setAllMessages={setAllMessages} />
        </div>
    )
}

export default MainFeed;