// deps
import React from "react";

// styles
import './AddSkill.css';

// components
import CloseIcon from '@mui/icons-material/Close';

function AddSkill({ showAddSkills, setShowAddSkills, newSkill, setNewSkill, addNewSkill }) {

    const handleSubmit = () => {
        addNewSkill();
        setShowAddSkills('none');
    }

    return (
        <div className="addSkillContainer" style={{ display: showAddSkills }}>
            <div className="addSkillHeader">
                <p>Add skill</p>
                <button onClick={() => setShowAddSkills('none')}><CloseIcon /></button>
            </div>
            <div className="separator"></div>
            <div className="addSkillBody">
                <div className="editProfileInfoField">
                    <p>Skill</p>
                    <input type="text" value={newSkill.skill}
                        onChange={event => setNewSkill({ ...newSkill, skill: event.target.value })} />
                </div>
                <div className="editProfileInfoField">
                    <p>Learnt from</p>
                    <input type="text" value={newSkill.learntFrom}
                        onChange={event => setNewSkill({ ...newSkill, learntFrom: event.target.value })} />
                </div>
            </div>
            <div className="separator secondSep"></div>
            <div className="addSkillFooter">
                <button onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}

export default AddSkill;