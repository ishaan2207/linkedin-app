import React from "react";
import './ProfileInformation.css';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CircleIcon from '@mui/icons-material/Circle';

function ProfileInformation() {
    const username = 'Ishaan Gupta';
    const about = 'Recent graduate from The University of British Columbia';
    const location = 'Gurugram, Haryana, India';
    const image = 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1738800000&v=beta&t=GMjdzIp5w0bjGYgLxVA3xmmgdlHNjsN00N224VioXm8';
    const universityImage = 'https://media.licdn.com/dms/image/v2/C4E0BAQH415qlDBkj8Q/company-logo_100_100/company-logo_100_100/0/1630608877834/universityofbc_logo?e=1741824000&v=beta&t=hRCeJhdlT4tQOs7Xz4CCLyICPATRkfu0Xh5OldE3pek';

    return (
        <div className="profileInformationContainer">
            <div className="profileBannerContainer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hhTzETCBuUg5fZ5ShDkejmAb9i8z_cqvNQ&s" alt="profileBanner" />
            </div>
            <div className="profileUserInformationContainer">
                <div id="userImageAndEditIcon">
                    <img src={image} alt="profileImage" />
                    <div className="mainFeedEditIcon">
                        <EditOutlinedIcon />
                    </div>
                </div>
                <div className="userInformation">
                    <div className="userInfoLeftColumn">
                        <div className="userNameContainer">
                            <p id="profileUsername">{username}</p>
                            <p id="profilePronouns">(He/Him)</p>
                        </div>
                        <p id="profileAbout">{about}</p>
                        <div className="userLocationContainer">
                            <p id="profileLocation">{location}</p>
                            <CircleIcon style={{ height: '3px', width: '3px', color: 'grey' }} />
                            <p id="profileContactInfo">Contact Info</p>
                        </div>
                        <div className="profileConnections">
                            166 connections
                        </div>
                    </div>
                    <div className="userInfoRightColumn">
                        <img src={universityImage} alt="" />
                        <p>The University of British Columbia</p>
                    </div>
                </div>
            </div>
            <div className="profileInformationButtons">
                <button id="profileOpenToButton profileButton">Open to</button>
                <button id="profileAddSectionButton profileButton">Add profile section</button>
                <button id="profileEnhanceProfileButton profileButton">Enhance profile</button>
                <button id="profileResourcesButton profileButton">Resources</button>
            </div>
        </div>
    )
}

export default ProfileInformation;