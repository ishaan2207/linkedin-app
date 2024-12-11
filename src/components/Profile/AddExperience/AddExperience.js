import React, { useState } from "react";
import './AddExperience.css';

import CloseIcon from '@mui/icons-material/Close';

function AddExperience() {
    const [showAddExperience, setShowAddExperience] = useState('none');

    return (
        <div className="addExperienceContainer">
            <div className="addExperienceHeader">
                <p>Add experience</p>
                <div className="addExperienceCloseButton">
                    <CloseIcon />
                </div>
            </div>
            <div className="separator"></div>
            <div className="indicatesRequired">* Indicates required</div>
            <div className="addExperienceTitle">

            </div>
        </div>
    )
}

export default AddExperience;