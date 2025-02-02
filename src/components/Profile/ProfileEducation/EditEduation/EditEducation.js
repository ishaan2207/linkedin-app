// deps
import React from "react";

// styles
import './EditEducation.css';

// components
import CloseIcon from '@mui/icons-material/Close';

// apis
import { updateProfileEducation } from "../../../../utils/apis/profile";

function EditEducation({ setAllEducations, showEditEducation, setShowEditEducation, editEducation, setEditEducation }) {

    const handleSubmit = () => {
        setAllEducations(prev => prev.map(education => education._id === editEducation._id ? editEducation : education));
        setShowEditEducation('none');
        updateProfileEducation(editEducation);
    }

    return (
        <div className="addEducationContainer" style={{ display: showEditEducation }}>
            <div className="addEducationHeader">
                <p>Edit education</p>
                <button onClick={() => setShowEditEducation('none')}><CloseIcon /></button>
            </div>
            <div className="separator"></div>
            <div className="addEducationBody">
                <div className="editProfileInfoField">
                    <p>Location</p>
                    <input type="text" value={editEducation.location}
                        onChange={event => setEditEducation({ ...editEducation, location: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Field</p>
                    <input type="text" value={editEducation.field}
                        onChange={event => setEditEducation({ ...editEducation, field: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Dates</p>
                    <input type="text" value={editEducation.dates}
                        onChange={event => setEditEducation({ ...editEducation, dates: event.target.value })} />
                </div>
            </div>
            <div className="separator secondSep"></div>
            <div className="addEducationFooter">
                <button onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}

export default EditEducation;