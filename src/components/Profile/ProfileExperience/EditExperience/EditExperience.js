// deps
import React from "react";

// styles
import './EditExperience.css';

// components
import CloseIcon from '@mui/icons-material/Close';

// apis
import { updateProfileExperience } from "../../../../utils/apis/profile";

function EditExperience({ setAllExperiences, showEditExperience, setShowEditExperience, editExperience, setEditExperience }) {

    const handleSubmit = () => {
        console.log('experienceID', editExperience);
        setAllExperiences(prev => prev.map(experience => experience._id === editExperience._id ? editExperience : experience));
        setShowEditExperience('none');
        updateProfileExperience(editExperience)
    }

    return (
        <div className="addEducationContainer" style={{ display: showEditExperience }}>
            <div className="addEducationHeader">
                <p>Edit experience</p>
                <button onClick={() => setShowEditExperience('none')}><CloseIcon /></button>
            </div>
            <div className="separator"></div>
            <div className="addEducationBody">
                <div className="editProfileInfoField">
                    <p>Title</p>
                    <input type="text" value={editExperience.title}
                        onChange={event => setEditExperience({ ...editExperience, title: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Company</p>
                    <input type="text" value={editExperience.company}
                        onChange={event => setEditExperience({ ...editExperience, company: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Company image</p>
                    <input type="text" value={editExperience.companyImage}
                        onChange={event => setEditExperience({ ...editExperience, companyImage: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Location</p>
                    <input type="text" value={editExperience.location}
                        onChange={event => setEditExperience({ ...editExperience, location: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Start date</p>
                    <input type="text" value={editExperience.startDate}
                        onChange={event => setEditExperience({ ...editExperience, startDate: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>End date</p>
                    <input type="text" value={editExperience.endDate}
                        onChange={event => setEditExperience({ ...editExperience, endDate: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Description</p>
                    <input type="text" value={editExperience.descriptions}
                        onChange={event => setEditExperience({ ...editExperience, descriptions: event.target.value })} />
                </div>
            </div>
            <div className="separator secondSep"></div>
            <div className="addEducationFooter">
                <button onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}

export default EditExperience;