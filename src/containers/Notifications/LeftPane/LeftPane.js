import React from "react";
import './LeftPane.css';
import ProfileSummary from "../../../components/ProfileSummary/ProfileSummary";
import ManageNotifications from "../../../components/Notifications/ManageNotifications/ManageNotifications";

function LeftPane() {
    return (
        <div>
            <ProfileSummary />
            <ManageNotifications />
        </div>
    )
}

export default LeftPane;