// deps
import React from "react";
import { useNavigate } from "react-router-dom";

// styles
import './ProfileSummary.css'

// components
import AddIcon from '@mui/icons-material/Add';

function ProfileSummary({ user }) {
    const navigate = useNavigate();

    function goToProfile() {
        navigate('/profile');
    }

    return (
        <div className="profileSummaryContainer" onClick={goToProfile}>
            <div className="bannerImageContainer">
                <img src={user?.bannerImg} alt="profileBannerImage" />
            </div>
            <div className="userInformationContainer">
                <img className="userImage" src={user?.image} alt="profileImage" />
                <p id="username">{user?.name}</p>
                <p id="about">{user?.bio}</p>
                <p id="location">{user?.location}</p>
                <button className="addExperienceButton">
                    <AddIcon style={{ paddingRight: '3px', height: '22px', width: '22px' }} />
                    Experience
                </button>
            </div>
        </div>
    )
}

export default ProfileSummary;
