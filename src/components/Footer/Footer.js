import React from "react";
import './Footer.css';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Footer() {

    return (
        <div className="footer">
            <div className="footerLinks">
                <a href="#">About</a>
                <a href="#">Accesibility</a>
                <a href="#">Help Center</a>
                <a href="#">
                    Privacy & Terms <ArrowDropDownIcon className="dropdownIcon" />
                </a>
                <a href="#">Ad Choices</a>
                <a href="#">Advertising</a>
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