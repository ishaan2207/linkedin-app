import React, { useState } from "react";
import './MainFeed.css';

import ProfileInformation from "../../../components/Profile/ProfileInformation/ProfileInformation";
import ProfileAnalytics from "../../../components/Profile/ProfileAnalytics/ProfileAnalytics";
import ProfileExperience from "../../../components/Profile/ProfileExperience/ProfileExperience";
import AddExperience from "../../../components/Profile/AddExperience/AddExperience";

function MainFeed() {
    const [showAddExperience, setShowAddExperience] = useState('none');

    return (
        <div className="profileMainFeedContainer">
            <ProfileInformation />
            <ProfileAnalytics />
            <ProfileExperience setShowAddExperience={setShowAddExperience} />
            <AddExperience showAddExperience={showAddExperience} setShowAddExperience={setShowAddExperience} />
        </div>
    )
}

export default MainFeed;