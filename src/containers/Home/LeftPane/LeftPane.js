// deps
import React, { useEffect, useState } from "react";

// styles
import './LeftPane.js';

// components
import ProfileSummary from "../../../components/ProfileSummary/ProfileSummary";
import PremiumAd from "../../../components/PremiumAd/PremiumAd";
import ProfileStatistics from "../../../components/ProfileStatistics/ProfileStatistics";
import BottomLeftPanel from "../../../components/BottomLeftPanel/BottomLeftPanel";

// contexts
import { useUser } from "../../../Context/UserContext.js";

// apis 
import { fetchProfileInformation } from "../../../utils/apis/profile.js";

function LeftPane() {
    const [userProfile, setUserProfile] = useState({});
    const { user } = useUser();

    useEffect(() => {
        fetchProfileInformation(user.userId).then(data => setUserProfile(data));
    }, []);

    return (
        <div className="leftPaneContainer">
            <ProfileSummary user={userProfile} />
            <PremiumAd />
            <ProfileStatistics user={userProfile} />
            <BottomLeftPanel />
        </div>
    )
}

export default LeftPane;