// deps
import React from "react";

// styles
import './AddEducation.css';

// components
import CloseIcon from '@mui/icons-material/Close';


function AddEducation({ showAddEducation, setShowAddEducation, newEducation, setNewEducation, addNewEducation }) {

    const handleSubmit = () => {
        addNewEducation();
        setShowAddEducation('none');
    }

    return (
        <div className="addEducationContainer" style={{ display: showAddEducation }}>
            <div className="addEducationHeader">
                <p>Add education</p>
                <button onClick={() => setShowAddEducation('none')}><CloseIcon /></button>
            </div>
            <div className="separator"></div>
            <div className="addEducationBody">
                <div className="editProfileInfoField">
                    <p>Location</p>
                    <input type="text" value={newEducation.location}
                        onChange={event => setNewEducation({ ...newEducation, location: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Field</p>
                    <input type="text" value={newEducation.field}
                        onChange={event => setNewEducation({ ...newEducation, field: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Dates</p>
                    <input type="text" value={newEducation.dates}
                        onChange={event => setNewEducation({ ...newEducation, dates: event.target.value })} />
                </div>
            </div>
            <div className="separator secondSep"></div>
            <div className="addEducationFooter">
                <button onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}

export default AddEducation;