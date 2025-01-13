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

function Skills() {
    return (
        <div className="skillsContainer">
            <div className="skillsHeader">
                <span>{PROFILE_SKILLS.SKILLS}</span>
                <div className="skillsHeaderButtons">
                    <button><AddIcon style={{ height: '30px', width: '30px', marginRight: '20px' }} /></button>
                    <button><EditIcon /></button>
                </div>
            </div>
            <div className="skillInformationContainer">
                {PROFILE_SKILLS.KNOWN_SKILLS.map((KNOWN_SKILL, key) => (
                    <div>
                        <div className="skillInformation" key={key}>
                            <div className="skillTitle">{KNOWN_SKILL.SKILL}</div>
                            <div className="skillLearntFrom">
                                <img src={KNOWN_SKILL.IMG} />
                                <span>{KNOWN_SKILL.LEARNT_FROM}</span>
                            </div>
                        </div>
                        {key !== PROFILE_SKILLS.KNOWN_SKILLS.length - 1 ? <div className="separator"></div> : ''}
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