import React from "react";
import './PremiumAd.css';

function PremiumAd() {
    return (
        <div className="messagingPremiumAdContainer">
            <p className="messagingPremiumHeader">Get hired faster with Premium</p>
            <p className="messagingPremiumEmailTag">Premium InMail is 4.6x more effective in hearing back than cold email.</p>
            <div className="messagingPremiumUsers">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M" />
                <p>Rohan Khanna and millions of other members use Premium</p>
            </div>
            <div>
                <button className="messagingPremiumButton">Try Premium for ₹0</button>
            </div>
            <p className="messagingPremiumFooter">1-month free trial. We'll send you a reminder 7 days before your trial ends.</p>
        </div>
    )
}

export default PremiumAd;