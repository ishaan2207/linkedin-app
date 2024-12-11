import React from "react";
import './ProfileSummary.css'
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';


function ProfileSummary() {
    const navigate = useNavigate();

    const username = 'Ishaan Gupta';
    const about = 'Recent graduate from The University of British Columbia';
    const location = 'Gurugram, Haryana';
    const image = 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1738800000&v=beta&t=GMjdzIp5w0bjGYgLxVA3xmmgdlHNjsN00N224VioXm8';

    function goToProfile() {
        navigate('/profile');
    }

    return (
        <div className="profileSummaryContainer" onClick={goToProfile}>
            <div className="bannerImageContainer">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hhTzETCBuUg5fZ5ShDkejmAb9i8z_cqvNQ&s' alt="profileBannerImage" />
            </div>
            <div className="userInformationContainer">
                <img className="userImage" src={image} alt="profileImage" />
                <p id="username">{username}</p>
                <p id="about">{about}</p>
                <p id="location">{location}</p>
                <button className="addExperienceButton">
                    <AddIcon style={{ paddingRight: '3px', height: '22px', width: '22px' }} />
                    Experience
                </button>
            </div>
        </div>
    )
}

export default ProfileSummary;
