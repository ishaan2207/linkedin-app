// deps
import React from "react";

// styles
import './ProfileInformation.css';

// components
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CircleIcon from '@mui/icons-material/Circle';

// constants
import { PROFILE_INFO } from "../../../constants/texts/Profile/profileInformation";

function ProfileInformation() {
    
    return (
        <div className="profileInformationContainer">
            <div className="profileBannerContainer">
                <img src={PROFILE_INFO.BANNER_IMG} alt="profileBanner" />
            </div>
            <div className="profileUserInformationContainer">
                <div id="userImageAndEditIcon">
                    <img src={PROFILE_INFO.IMAGE} alt="profileImage" />
                    <div className="mainFeedEditIcon">
                        <EditOutlinedIcon />
                    </div>
                </div>
                <div className="userInformation">
                    <div className="userInfoLeftColumn">
                        <div className="userNameContainer">
                            <p id="profileUsername">{PROFILE_INFO.USERNAME}</p>
                            <p id="profilePronouns">{PROFILE_INFO.PRONOUNS}</p>
                        </div>
                        <p id="profileAbout">{PROFILE_INFO.ABOUT}</p>
                        <div className="userLocationContainer">
                            <p id="profileLocation">{PROFILE_INFO.LOCATION}</p>
                            <CircleIcon style={{ height: '3px', width: '3px', color: 'grey' }} />
                            <p id="profileContactInfo">{PROFILE_INFO.CONTACT_INFO}</p>
                        </div>
                        <div className="profileConnections">
                            {PROFILE_INFO.NUM_CONNECTIONS}
                        </div>
                    </div>
                    <div className="userInfoRightColumn">
                        <img src={PROFILE_INFO.UNIVERSITY_IMG} alt="" />
                        <p>{PROFILE_INFO.UNIVERSITY_NAME}</p>
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