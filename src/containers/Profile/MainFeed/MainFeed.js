import React from "react";
import './MainFeed.css';
import ProfileInformation from "../../../components/Profile/ProfileInformation/ProfileInformation";
import ProfileAnalytics from "../../../components/Profile/ProfileAnalytics/ProfileAnalytics";
import ProfileExperience from "../../../components/Profile/ProfileExperience/ProfileExperience";

function MainFeed() {
    return (
        <div className="profileMainFeedContainer">
            <ProfileInformation />
            <ProfileAnalytics />
            <ProfileExperience />
        </div>
    )
}

export default MainFeed;