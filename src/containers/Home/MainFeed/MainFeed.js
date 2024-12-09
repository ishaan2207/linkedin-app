import React from "react";
import './MainFeed.css';

import CreatePost from "../../../components/CreatePost/CreatePost";
import Posts from "../../../components/Posts/Posts";

function MainFeed() {
    return (
        <div className="mainFeedContainer">
            <CreatePost />
            <Posts />
        </div>
    )
}

export default MainFeed;