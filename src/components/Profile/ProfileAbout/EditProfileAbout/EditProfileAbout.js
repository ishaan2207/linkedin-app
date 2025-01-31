// deps
import React from "react";

// styles
import './EditProfileAbout.css';

// components
import CloseIcon from '@mui/icons-material/Close';

// apis
import { updateProfileAbout } from "../../../../utils/apis/profile";

function EditProfileAbout({ profileInfo, setProfileInfo, showEditAbout, setShowEditAbout, id }) {

    const handleSubmit = () => {
        setShowEditAbout('none')
        updateProfileAbout(id, profileInfo.about);
    }

    return (
        <div className="editProfileAboutContainer" style={{ display: showEditAbout }}>
            <div className="editProfileAboutHeader">
                <p>Edit about section</p>
                <button onClick={() => setShowEditAbout('none')}><CloseIcon /></button>
            </div>
            <div className="editProfileAboutBody">
                <p>About</p>
                <textarea value={profileInfo.about} onChange={(event) => setProfileInfo({ ...profileInfo, about: event.target.value })} />
            </div>
            <div className="separator"></div>
            <div className="editProfileAboutFooter">
                <button onClick={() => handleSubmit()}>Save</button>
            </div>
        </div>
    )
}

export default EditProfileAbout;