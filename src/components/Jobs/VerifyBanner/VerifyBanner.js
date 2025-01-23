// deps
import React, { useState } from "react";

// styles
import './VerifyBanner.css';

// components
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import CloseIcon from '@mui/icons-material/Close';

// constants
import { VERIFY_BANNER } from "../../../constants/texts/Jobs/jobsVerifyBanner";

function VerifyBanner() {
    const [hideBanner, setHideBanner] = useState('block');

    const handleHideBanner = () => {
        setHideBanner(prev => {
            if (prev === 'block') {
                return 'none';
            } else {
                return 'block';
            }
        })
    }

    return (
        <div style={{ display: hideBanner }}>
            <div className="verifyBannerContainer">
                <div className="verifyBannerLeft">
                    <div className="verifyBannerText">
                        <p className="verifyBannerHeader">{VERIFY_BANNER.HEADER}</p>
                        <p className="verifyBannerSubtext">{VERIFY_BANNER.SUBTEXT}</p>
                        <button><VerifiedUserOutlinedIcon style={{ height: '18px', width: '18px' }} /><span>{VERIFY_BANNER.BUTTON}</span></button>
                    </div>
                    <div className="verifyBannerImage">
                        <img src="https://static.licdn.com/aero-v1/sc/h/610pve8xylrtp8yzoahoge0w5" alt="" />
                    </div>
                </div>
                <div className="verifyBannerRight">
                    <button onClick={handleHideBanner}><CloseIcon style={{ height: '20px', width: '20px' }} /></button>
                </div>
            </div>
        </div>
    )
}

export default VerifyBanner;