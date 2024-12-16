import React from "react";
import './MainFeed.css';
import HeaderToggle from "../../../components/MyNetwork/HeaderToggle/HeaderToggle";
import NetworkInvitations from "../../../components/MyNetwork/NetworkInvitations/NetworkInvitations";
import NetworkGames from "../../../components/MyNetwork/NetworkGames/NetworkGames";

function MainFeed() {
    return (
        <div>
            <HeaderToggle />
            <NetworkInvitations />
            <NetworkGames />
        </div>
    )
}

export default MainFeed;