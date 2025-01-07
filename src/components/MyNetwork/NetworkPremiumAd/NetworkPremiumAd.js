import React, { useState } from "react";
import './NetworkPremiumAd.css';

import CloseIcon from '@mui/icons-material/Close';

function NetworkPremiumAd() {
    const [closeAd, setCloseAd] = useState('block')

    const handleCloseAd = () => {
        setCloseAd('none')
    }

    return (
        <div className="networkPremiumAdContainer" style={{ display: closeAd }}>
            <div className="networkPremiumAdHeader">
                <div>Boost your career with Premium</div>
                <button onClick={handleCloseAd}><CloseIcon /></button>
            </div>
            <div className="premiumAdTagLine">
                Premium subscribers are 39% more likely to hear back after applying for a job.
            </div>
            <div className="premiumExampleUsers">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=2147483647&v=beta&t=oeyqj6yO2Wf07SJkiTXnpAag12Yp0H9akDR6dwoVa3k" />
                <div>Vedant and millions of other members use Premium</div>
            </div>
            <div className="tryPremiumButton">
                <button>Try Premium for ₹0</button>
            </div>
            <div className="networkPremiumFreeTrial">1-month free trial. Cancel anytime.</div>
        </div>
    )
}

export default NetworkPremiumAd;