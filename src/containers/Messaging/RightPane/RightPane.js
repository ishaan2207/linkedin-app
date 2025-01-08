// deps
import React from "react";

// styles
import './RightPane.css';

// components
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