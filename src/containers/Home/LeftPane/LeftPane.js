// deps
import React from "react";

// styles
import './LeftPane.js';

// components
import ProfileSummary from "../../../components/ProfileSummary/ProfileSummary";
import PremiumAd from "../../../components/PremiumAd/PremiumAd";
import ProfileStatistics from "../../../components/ProfileStatistics/ProfileStatistics";
import BottomLeftPanel from "../../../components/BottomLeftPanel/BottomLeftPanel";

function LeftPane() {
    return (
        <div className="leftPaneContainer">
            <ProfileSummary />
            <PremiumAd />
            <ProfileStatistics />
            <BottomLeftPanel />
        </div>
    )
}

export default LeftPane;