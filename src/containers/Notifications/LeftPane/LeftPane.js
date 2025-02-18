// deps
import React, { useState, useEffect } from "react";

// styles
import './LeftPane.css';

// components
import ProfileSummary from "../../../components/ProfileSummary/ProfileSummary";
import ManageNotifications from "../../../components/Notifications/ManageNotifications/ManageNotifications";

// contexts
import { useUser } from "../../../Context/UserContext";

// apis
import { fetchProfileInformation } from "../../../utils/apis/profile";

function LeftPane() {
    const [userProfile, setUserProfile] = useState([]);
    const { user } = useUser();

    useEffect(() => {
        fetchProfileInformation(user.userId).then(data => setUserProfile(data));
    }, []);

    return (
        <div>
            <ProfileSummary user={userProfile} />
            <ManageNotifications />
        </div>
    )
}

export default LeftPane;