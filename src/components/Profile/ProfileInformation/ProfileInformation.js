// deps
import React from "react";

// styles
import './ProfileInformation.css';

// components
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CircleIcon from '@mui/icons-material/Circle';

function ProfileInformation({ profileInfo, setShowEditInfo }) {

    return (
        <div className="profileInformationContainer">
            <div className="profileBannerContainer">
                <img src={profileInfo.bannerImg} alt="profileBanner" />
            </div>
            <div className="profileUserInformationContainer">
                <div id="userImageAndEditIcon">
                    <img src={profileInfo.image} alt="profileImage" />
                    <div className="mainFeedEditIcon">
                        <button onClick={() => setShowEditInfo('block')}><EditOutlinedIcon style={{ margin: '2px 0 0 3px' }} /></button>
                    </div>
                </div>
                <div className="userInformation">
                    <div className="userInfoLeftColumn">
                        <div className="userNameContainer">
                            <p id="profileUsername">{profileInfo.name}</p>
                            <p id="profilePronouns">{profileInfo.pronouns}</p>
                        </div>
                        <p id="profileAbout">{profileInfo.bio}</p>
                        <p id="profileUniversityHidden">{profileInfo.universityName}</p>
                        <div className="userLocationContainer">
                            <p id="profileLocation">{profileInfo.location}</p>
                            <CircleIcon style={{ height: '3px', width: '3px', color: 'grey' }} />
                            <p id="profileContactInfo">{profileInfo.contactInfo}</p>
                        </div>
                        <div className="profileConnections">
                            {profileInfo.numConnections}
                        </div>
                    </div>
                    <div className="userInfoRightColumn">
                        <img src={profileInfo.universityImg} alt="" />
                        <p>{profileInfo.universityName}</p>
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