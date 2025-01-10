// deps
import React from "react";
import { useNavigate } from "react-router-dom";

// styles
import './ProfileSummary.css'

// components
import AddIcon from '@mui/icons-material/Add';

// constants
import { PROFILE_SUMMARY } from "../../constants/mocks/Home/homeProfileSummary";

function ProfileSummary() {
    const navigate = useNavigate();

    function goToProfile() {
        navigate('/profile');
    }

    return (
        <div className="profileSummaryContainer" onClick={goToProfile}>
            <div className="bannerImageContainer">
                <img src={PROFILE_SUMMARY.BANNER_IMG} alt="profileBannerImage" />
            </div>
            <div className="userInformationContainer">
                <img className="userImage" src={PROFILE_SUMMARY.IMG} alt="profileImage" />
                <p id="username">{PROFILE_SUMMARY.USERNAME}</p>
                <p id="about">{PROFILE_SUMMARY.ABOUT}</p>
                <p id="location">{PROFILE_SUMMARY.LOCATION}</p>
                <button className="addExperienceButton">
                    <AddIcon style={{ paddingRight: '3px', height: '22px', width: '22px' }} />
                    Experience
                </button>
            </div>
        </div>
    )
}

export default ProfileSummary;
