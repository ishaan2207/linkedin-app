import React from "react";
import './MainFeed.css';
import ProfileInformation from "../../../components/Profile/ProfileInformation/ProfileInformation";
import ProfileAnalytics from "../../../components/Profile/ProfileAnalytics/ProfileAnalytics";

function MainFeed() {
    return (
        <div className="profileMainFeedContainer">
            <ProfileInformation />
            <ProfileAnalytics />
        </div>
    )
}

export default MainFeed;