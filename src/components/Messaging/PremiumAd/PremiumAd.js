// deps
import React from "react";

// styles
import './PremiumAd.css';

// constants
import { MESSAGING_PAGE } from "../../../constants/texts/MessagingPage/messagingPageAd";

function PremiumAd() {
    return (
        <div className="messagingPremiumAdContainer">
            <p className="messagingPremiumHeader">{MESSAGING_PAGE.HEADER}</p>
            <p className="messagingPremiumEmailTag">{MESSAGING_PAGE.EMAIL_TAG}</p>
            <div className="messagingPremiumUsers">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M" />
                <p>{MESSAGING_PAGE.EXAMPLE_USERS}</p>
            </div>
            <div>
                <button className="messagingPremiumButton">{MESSAGING_PAGE.TRY_PREMIUM}</button>
            </div>
            <p className="messagingPremiumFooter">{MESSAGING_PAGE.FOOTER}</p>
        </div>
    )
}

export default PremiumAd;