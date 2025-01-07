import React from "react";
import './MainFeed.css';
import HeaderToggle from "../../../components/MyNetwork/HeaderToggle/HeaderToggle";
import NetworkInvitations from "../../../components/MyNetwork/NetworkInvitations/NetworkInvitations";
import NetworkGames from "../../../components/MyNetwork/NetworkGames/NetworkGames";
import NetworkPremiumAd from "../../../components/MyNetwork/NetworkPremiumAd/NetworkPremiumAd";
import RecommendedProfiles from "../../../components/MyNetwork/RecommendedProfiles/RecommendedProfiles";

function MainFeed() {
    return (
        <div>
            <HeaderToggle />
            <NetworkInvitations />
            <NetworkGames />
            <NetworkPremiumAd />
            <RecommendedProfiles />
        </div>
    )
}

export default MainFeed;