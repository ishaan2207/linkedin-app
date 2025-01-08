// deps
import React from "react";
import { useNavigate } from "react-router-dom";

// styles
import './Footer.css';

// components
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// constants
import { FOOTER_TEXT } from "../../constants/texts/Footer/footer";

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
                <a href="#" onClick={goToAbout}>{FOOTER_TEXT.ABOUT}</a>
                <a href="#" onClick={goToAccessibility}>{FOOTER_TEXT.ACCESSIBIITY}</a>
                <a href="#" onClick={goToHelpCenter}>{FOOTER_TEXT.HELP_CENTER}</a>
                <a href="#">
                    Privacy & Terms <ArrowDropDownIcon className="dropdownIcon" />
                </a>
                <a href="#" onClick={goToAdChoices}>{FOOTER_TEXT.AD_CHOICES}</a>
                <a href="#" onClick={goToAdvertising}>{FOOTER_TEXT.ADVERTISING}</a>
                <a href="#">
                    Business Services <ArrowDropDownIcon className="dropdownIcon" />
                </a>
                <a href="#">{FOOTER_TEXT.GET_APP}</a>
                <a href="#">{FOOTER_TEXT.MORE}</a>
            </div>
            <div className="footerBottom">
                <img src={FOOTER_TEXT.LOGO} alt="logo" className="linkedinLogo" />
                <span>{FOOTER_TEXT.COPYRIGHT}</span>
            </div>
        </div>
    )
}

export default Footer;