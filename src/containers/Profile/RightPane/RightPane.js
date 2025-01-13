import React from "react";
import './RightPane.css';
import ProfileSettings from "../../../components/Profile/ProfileSettings/ProfileSettings";
import MoreProfiles from "../../../components/Profile/MoreProfiles/MoreProfiles";

function RightPane() {
    return (
        <div className="profileRightPaneContainer">
            <ProfileSettings />
            <MoreProfiles />
        </div>
    )
}

export default RightPane;