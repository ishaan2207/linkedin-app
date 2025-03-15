// deps
import React from "react";

// styles
import './Skills.css';

// components
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import EastIcon from '@mui/icons-material/East';

// constants
import { PROFILE_SKILLS } from "../../../constants/texts/Profile/profileSkills";

function Skills({ allSkills, setShowAddSkills, setShowUpdateSkills, setEditSkill }) {

    const handleEditSkill = (skill) => {
        setShowUpdateSkills('block');
        setEditSkill(skill);
    }

    return (
        <div className="skillsContainer">
            <div className="skillsHeader">
                <span>{PROFILE_SKILLS.SKILLS}</span>
                <div className="skillsHeaderButtons">
                    <button onClick={() => setShowAddSkills('block')}><AddIcon style={{ height: '30px', width: '30px' }} /></button>
                </div>
            </div>
            <div className="skillInformationContainer">
                {allSkills.map((skill, key) => (
                    <div key={key}>
                        <div className="skillInformation">
                            <div>
                                <div className="skillTitle">{skill.skill}</div>
                                <div className="skillLearntFrom">
                                    <img src={skill.image} alt="" />
                                    <span>{skill.learntFrom}</span>
                                </div>
                            </div>
                            <button className="editProfileEntry" onClick={() => handleEditSkill(skill)}><EditIcon /></button>
                        </div>
                        {key !== allSkills.length - 1 ? <div className="separator"></div> : ''}
                    </div>
                ))}
            </div>
            <div className="showAllSkillsButton">
                <div className="separator"></div>
                <div className="showAllSkillsText">
                    <p><span>{PROFILE_SKILLS.ALL_SKILLS}</span> <EastIcon style={{ height: '18px', width: '18px' }} /></p>
                </div>
            </div>
        </div>
    )
}

export default Skills;