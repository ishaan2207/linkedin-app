// deps
import React, { useEffect, useState } from "react";

// styles
import './ProfileInformation.css';

// components
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CircleIcon from '@mui/icons-material/Circle';

// constants
// import { PROFILE_INFO } from "../../../constants/texts/Profile/profileInformation";

// apis
import { fetchProfileInformation } from "../../../utils/apis/profile";

function ProfileInformation() {

    const [profileInformation, setProfileInformation] = useState([]);

    useEffect(() => {
        fetchProfileInformation().then(data => setProfileInformation(data[0]));
    }, [])

    return (
        <div className="profileInformationContainer">
            <div className="profileBannerContainer">
                <img src={profileInformation.bannerImg} alt="profileBanner" />
            </div>
            <div className="profileUserInformationContainer">
                <div id="userImageAndEditIcon">
                    <img src={profileInformation.image} alt="profileImage" />
                    <div className="mainFeedEditIcon">
                        <EditOutlinedIcon />
                    </div>
                </div>
                <div className="userInformation">
                    <div className="userInfoLeftColumn">
                        <div className="userNameContainer">
                            <p id="profileUsername">{profileInformation.name}</p>
                            <p id="profilePronouns">{profileInformation.pronouns}</p>
                        </div>
                        <p id="profileAbout">{profileInformation.bio}</p>
                        <p id="profileUniversityHidden">{profileInformation.universityName}</p>
                        <div className="userLocationContainer">
                            <p id="profileLocation">{profileInformation.location}</p>
                            <CircleIcon style={{ height: '3px', width: '3px', color: 'grey' }} />
                            <p id="profileContactInfo">{profileInformation.contactInfo}</p>
                        </div>
                        <div className="profileConnections">
                            {profileInformation.numConnections}
                        </div>
                    </div>
                    <div className="userInfoRightColumn">
                        <img src={profileInformation.universityImg} alt="" />
                        <p>{profileInformation.universityName}</p>
                    </div>
                </div>
            </div>
            <div className="profileInformationButtons">
                <button className="profileOpenToButton profileButton">Open to</button>
                <button className="profileAddSectionButton profileButton">Add profile section</button>
                <button className="profileEnhanceProfileButton profileButton">Enhance profile</button>
                <button className="profileResourcesButton profileButton">Resources</button>
            </div>
        </div>
    )
}

export default ProfileInformation;