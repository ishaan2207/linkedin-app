import React from "react";
import './Footer.css';
import { useNavigate } from "react-router-dom";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Footer() {
    const navigate = useNavigate();

    function goToAbout() {
        navigate('/about');
    }

    function goToAccessibility() {
        navigate('/accessibility');
    }

    function goToHelpCenter() {
        navigate('/help-center');
    }

    function goToAdChoices() {
        navigate('/ad-choices');
    }

    function goToAdvertising() {
        navigate('/advertising');
    }

    return (
        <div className="footer">
            <div className="footerLinks">
                <a href="#" onClick={goToAbout}>About</a>
                <a href="#" onClick={goToAccessibility}>Accessibility</a>
                <a href="#" onClick={goToHelpCenter}>Help Center</a>
                <a href="#">
                    Privacy & Terms <ArrowDropDownIcon className="dropdownIcon" />
                </a>
                <a href="#" onClick={goToAdChoices}>Ad Choices</a>
                <a href="#" onClick={goToAdvertising}>Advertising</a>
                <a href="#">
                    Business Services <ArrowDropDownIcon className="dropdownIcon" />
                </a>
                <a href="#">Get the LinkedIn app</a>
                <a href="#">More</a>
            </div>
            <div className="footerBottom">
                <img src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" alt="logo" className="linkedinLogo" />
                <span>LinkedIn Corporation © 2024</span>
            </div>
        </div>
    )
}

export default Footer;