import React from "react";
import './ProfileExperience.css';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

function ProfileExperience({ setShowAddExperience, experiences }) {

    function handleShowExperience(show) {
        console.log(setShowAddExperience(show));
    }

    return (
        <div className="profileExperienceContainer">
            <div className="profileExperienceHeader">
                <p>Experience</p>
                <div className="profileHeaderButtons">
                    <button onClick={handleShowExperience('block')}><AddIcon style={{ height: '30px', width: '30px', marginRight: '20px' }} /></button>
                    <button><EditIcon /></button>
                </div>
            </div>
            <div className="profileExperience">
                {experiences.map(experience => (
                    <div className="experiencesContainer">
                        <div className="profileExperienceImage">
                            <img src={experience.companyImage} />
                        </div>
                        <div className="profileExperienceDescription">
                            <div className="experienceTitle">{experience.title}</div>
                            <div className="experienceCompany">{experience.company}</div>
                            <div className="experienceStartEndDates">{experience.startDate} to {experiences.endDate}</div>
                            <div className="experienceLocation">{experience.location}</div>
                            <ul className="experienceDescription">
                                {experience.descriptions.map(description => (
                                    <li>{description}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfileExperience;