import React from "react";
import './PremiumAd.css';

import SquareIcon from '@mui/icons-material/Square';


function PremiumAd() {

    return (
        <div className="premiumAdContainer">
            <p>Access exlusive tools & insights</p>
            <div className="adIconContainer">
                <SquareIcon style={{ height: '15px', width: '15px' }} />
                <p>Get hired faster with Premium</p>
            </div>
        </div>
    )
}

export default PremiumAd;