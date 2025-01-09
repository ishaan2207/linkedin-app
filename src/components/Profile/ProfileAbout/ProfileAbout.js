// deps
import React from "react";

// styles
import './ProfileAbout.css';

// components
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';

// constants
import { PROFILE_ABOUT } from "../../../constants/texts/Profile/profileAbout";

function ProfileAbout() {
    return (
        <div className="profileAboutContainer">
            <div className="profileAboutHeader">
                <p>{PROFILE_ABOUT.ABOUT}</p>
                <EditRoundedIcon />
            </div>
            <div className="profileAboutText">
                <p>{PROFILE_ABOUT.ABOUT_TEXT}</p>
            </div>
            <div className="profileAboutSkillsContainer">
                <div>
                    <DiamondRoundedIcon />
                    <div className="profileAboutSkills">
                        <p>{PROFILE_ABOUT.TOP_SKILLS}</p>
                        <p>{PROFILE_ABOUT.SKILL_DISPLAYED}</p>
                    </div>
                    <div className="profileAboutArrow">
                        <ArrowForwardRoundedIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileAbout;