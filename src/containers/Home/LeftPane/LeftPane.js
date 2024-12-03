import React from "react";
import ProfileSummary from "../../../components/ProfileSummary/ProfileSummary";
import PremiumAd from "../../../components/PremiumAd/PremiumAd";
import ProfileStatistics from "../../../components/ProfileStatistics/ProfileStatistics";
import BottomLeftPanel from "../../../components/BottomLeftPanel/BottomLeftPanel";

function LeftPane() {

    return (
        <div>
            <ProfileSummary />
            <PremiumAd />
            <ProfileStatistics />
            <BottomLeftPanel />
            {/* Profile Summary
            Profile Statistics
            Linkedin premium ad
            Bottom left panel */}
        </div>
    )
}

export default LeftPane;