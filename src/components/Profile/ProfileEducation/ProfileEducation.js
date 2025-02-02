// deps
import React from "react";

// styles
import './ProfileEducation.css';

// components
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

// constants
import { PROFILE_EDUCATION } from "../../../constants/texts/Profile/profileEducation";

function ProfileEducation({ allEducations, setShowAddEducation, setShowEditEducation, setEditEducation }) {

    const handleEditEducation = (education) => {
        setShowEditEducation('block');
        setEditEducation(education);
    }

    return (
        <div className="profileEducationContainer">
            <div className="profileEducationHeader">
                <p>{PROFILE_EDUCATION.EDUCATION}</p>
                <div className="profileHeaderButtons">
                    <button onClick={() => setShowAddEducation('block')}><AddIcon style={{ height: '30px', width: '30px' }} /></button>
                </div>
            </div>
            <div className="profileEducation">
                {allEducations.map((education, key) => (
                    <div key={key}>
                        <div className="educationsContainer">
                            <div className="profileEducationImage">
                                <img src={education.image} alt="" />
                            </div>
                            <div className="profileEducationDescription">
                                <div className="educationLocation">{education.location}</div>
                                <div className="educationField">{education.field}</div>
                                <div className="educationDates">{education.dates}</div>
                                <div className="profileEducationSkills">
                                    <DiamondOutlinedIcon style={{ height: '18px', width: '18px' }} />
                                    <span>{PROFILE_EDUCATION.SKILLS}</span>
                                </div>
                            </div>
                            <button className="editProfileEntry" onClick={() => handleEditEducation(education)}><EditIcon /></button>
                        </div>
                        {key !== allEducations.length - 1 ? <div className="separator"></div> : ''}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfileEducation;