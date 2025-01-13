// deps
import React from "react";

// styles
import './PremiumAd.css';

// components
import SquareIcon from '@mui/icons-material/Square';

// constants
import { PREMIUM_AD } from "../../constants/texts/Home/homePremiumAd";

function PremiumAd() {

    return (
        <div className="premiumAdContainer">
            <p>{PREMIUM_AD.HEADER}</p>
            <div className="adIconContainer">
                <SquareIcon style={{ height: '15px', width: '15px' }} />
                <p>{PREMIUM_AD.TAGLINE}</p>
            </div>
        </div>
    )
}

export default PremiumAd;