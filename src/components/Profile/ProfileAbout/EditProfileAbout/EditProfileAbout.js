// deps
import React from "react";

// styles
import './EditProfileAbout.css';

// components
import CloseIcon from '@mui/icons-material/Close';

function EditProfileAbout({ profileAbout, setProfileAbout, showEditAbout, setShowEditAbout }) {

    const handleSubmit = () => {

    }

    return (
        <div className="editProfileAboutContainer" style={{ display: showEditAbout }}>
            <div className="editProfileAboutHeader">
                <p>Edit about section</p>
                <button onClick={() => setShowEditAbout('none')}><CloseIcon /></button>
            </div>
            <div className="editProfileAboutBody">
                <p>About</p>
                <textarea value={profileAbout} onChange={(event) => setProfileAbout(event.target.value)} />
            </div>
            <div className="editProfileAboutFooter">
                <button>Save</button>
            </div>
        </div>
    )
}

export default EditProfileAbout;