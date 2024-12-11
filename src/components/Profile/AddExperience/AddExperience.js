import React, { useState } from "react";
import './AddExperience.css';

import CloseIcon from '@mui/icons-material/Close';

function AddExperience({ showAddExperience, setShowAddExperience }) {

    return (
        <div className="addExperienceContainer">
            <div className="addExperienceHeader">
                <p>Add experience</p>
                <div className="addExperienceCloseButton">
                    <CloseIcon />
                </div>
            </div>
            <div className="separator"></div>
            <div className="addExperienceForm">
                <div className="indicatesRequired">* Indicates required</div>
                <div className="addExperienceTitle addExperienceTextForm">
                    <p>Title*</p>
                    <input type="text" placeholder="Ex: Retail Sales Manager" />
                </div>
                <div className="addExperienceEmploymentType addExperienceTextForm">
                    <p>Employment type</p>
                    <input type="text" placeholder="Ex: Full Time" />
                </div>
                <div className="addExperienceCompany addExperienceTextForm">
                    <p>Company or organization*</p>
                    <input type="text" placeholder="Ex: Microsoft" />
                </div>
                <div className="currentlyWorkingHereCheckbox">
                    <input type="checkbox" checked={true} />
                    <p>I am currently working in this role</p>
                </div>
                <div className="startDateInput addExperienceDates">
                    <p>Start date*</p>
                    <div className="datesInputContainer">
                        <input type="text" placeholder="Month" />
                        <input type="text" placeholder="Year" />
                    </div>
                </div>
                <div className="endDateInput addExperienceDates">
                    <p>End date*</p>
                    <div className="datesInputContainer">
                        <input type="text" placeholder="Month" />
                        <input type="text" placeholder="Year" />
                    </div>
                </div>
                <div className="addExperienceLocation addExperienceTextForm">
                    <p>Location</p>
                    <input type="text" placeholder="Ex: London, United Kingdom" />
                </div>
                <div className="addExperienceLocationType addExperienceTextForm">
                    <p>Location type</p>
                    <input type="text" placeholder="Ex: On-site" />
                </div>
            </div>
        </div>
    )
}

export default AddExperience;