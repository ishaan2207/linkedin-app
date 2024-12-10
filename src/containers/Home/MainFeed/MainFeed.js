import React from "react";
import './MainFeed.css';

import CreatePost from "../../../components/CreatePost/CreatePost";
import AllPosts from "../../../components/AllPosts/AllPosts";

function MainFeed() {
    return (
        <div className="mainFeedContainer">
            <CreatePost />
            <AllPosts />
        </div>
    )
}

export default MainFeed;