import React from "react";
import './MainFeed.css';

import CreatePost from "../../../components/CreatePost/CreatePost";

function MainFeed() {
    return (
        <div className="mainFeedContainer">
            <CreatePost />
        </div>
    )
}

export default MainFeed;