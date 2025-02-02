// deps
import React, { useEffect, useState } from "react";

// styles
import './ProfileExperience.css';

// components
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

// apis
import { fetchProfileExperience } from "../../../utils/apis/profile";

function ProfileExperience({ setShowAddExperience }) {

    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetchProfileExperience().then(data => setExperiences(data))
    }, [])

    function handleShowExperience(show) {
        setShowAddExperience(show);
    }

    return (
        <div className="profileExperienceContainer">
            <div className="profileExperienceHeader">
                <p>Experience</p>
                <div className="profileHeaderButtons">
                    <button onClick={() => handleShowExperience('block')}><AddIcon style={{ height: '30px', width: '30px' }} /></button>
                </div>
            </div>
            <div className="profileExperience">
                {experiences.map((experience, key) => (
                    <div key={key}>
                        <div className="experiencesContainer" key={key}>
                            <div className="profileExperienceImage">
                                <img src={experience.companyImage} alt="" />
                            </div>
                            <div className="profileExperienceDescription">
                                <div className="experienceTitle">{experience.title}</div>
                                <div className="experienceCompany">{experience.company}</div>
                                <div className="experienceStartEndDates">{experience.startDate} to {experience.endDate}</div>
                                <div className="experienceLocation">{experience.location}</div>
                                <ul className="experienceDescription">
                                    {experience.descriptions.map(description => (
                                        <li>{description}</li>
                                    ))}
                                </ul>
                            </div>
                            <button className="editProfileEntry"><EditIcon /></button>
                        </div>
                        {key !== experiences.length - 1 ? <div className="separator"></div> : ''}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfileExperience;