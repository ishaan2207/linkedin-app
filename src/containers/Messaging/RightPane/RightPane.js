import React from "react";
import './RightPane.css';
import PremiumAd from "../../../components/Messaging/PremiumAd/PremiumAd";
import Footer from "../../../components/Footer/Footer";

function RightPane() {
    return (
        <div className="messagingRightPaneContainer">
            <PremiumAd />
            <Footer />
        </div>
    )
}

export default RightPane;