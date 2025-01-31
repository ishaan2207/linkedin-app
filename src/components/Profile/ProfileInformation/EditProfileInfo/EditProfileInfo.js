// deps 
import React from "react";

// styles
import './EditProfileInfo.css';

// components
import CloseIcon from '@mui/icons-material/Close';

function EditProfileInfo({ profileInfo, setProfileInfo, showEditInfo, setShowEditInfo }) {
    return (
        <div className="editProfileInfoContainer" style={{ display: showEditInfo }}>
            <div className="editProfileInfoHeader">
                <p>Edit profile information</p>
                <button onClick={() => setShowEditInfo('none')}><CloseIcon /></button>
            </div>
            <div className="separator"></div>
            <div className="editProfileInfoBody">
                <div className="editProfileInfoField">
                    <p>Name</p>
                    <input type="text" value={profileInfo.name}
                        onChange={event => setProfileInfo({ ...profileInfo, name: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Pronouns</p>
                    <input type="text" value={profileInfo.pronouns}
                        onChange={event => setProfileInfo({ ...profileInfo, pronouns: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Bio</p>
                    <input type="text" value={profileInfo.bio}
                        onChange={event => setProfileInfo({ ...profileInfo, bio: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Location</p>
                    <input type="text" value={profileInfo.location}
                        onChange={event => setProfileInfo({ ...profileInfo, location: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Place of study</p>
                    <input type="text" value={profileInfo.universityName}
                        onChange={event => setProfileInfo({ ...profileInfo, universityName: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Profile image</p>
                    <input type="text" value={profileInfo.image}
                        onChange={event => setProfileInfo({ ...profileInfo, image: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Banner image</p>
                    <input type="text" value={profileInfo.bannerImg}
                        onChange={event => setProfileInfo({ ...profileInfo, bannerImg: event.target.value })} />
                </div>
            </div>
            <div className="separator secondSep"></div>
            <div className="editProfileInfoFooter">
                <button>Save</button>
            </div>
        </div>
    )
}

export default EditProfileInfo;