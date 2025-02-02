// deps 
import React from "react";

// styles
import './UpdateSkill.css';

// components
import CloseIcon from '@mui/icons-material/Close';

// apis 
import { updateProfileSkill } from "../../../../utils/apis/profile";

function UpdateSkill({ setAllSkills, showUpdateSkills, setShowUpdateSkills, editSkill, setEditSkill }) {

    const handleSubmit = () => {
        setAllSkills(prev => prev.map(skill => skill.id === editSkill.id ? editSkill : skill));
        setShowUpdateSkills('none');
        updateProfileSkill(editSkill);
    }

    return (
        <div className="addSkillContainer" style={{ display: showUpdateSkills }}>
            <div className="addSkillHeader">
                <p>Update skill</p>
                <button onClick={() => setShowUpdateSkills('none')}><CloseIcon /></button>
            </div>
            <div className="separator"></div>
            <div className="addSkillBody">
                <div className="editProfileInfoField">
                    <p>Skill</p>
                    <input type="text" value={editSkill.skill}
                        onChange={event => setEditSkill({ ...editSkill, skill: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Learnt from</p>
                    <input type="text" value={editSkill.learntFrom}
                        onChange={event => setEditSkill({ ...editSkill, learntFrom: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Image</p>
                    <input type="text" value={editSkill.image}
                        onChange={event => setEditSkill({ ...editSkill, image: event.target.value })} />
                </div>
            </div>
            <div className="separator secondSep"></div>
            <div className="addSkillFooter">
                <button onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}

export default UpdateSkill;