import React from "react";
import './ProfileAbout.css';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';

function ProfileAbout() {
    return (
        <div className="profileAboutContainer">
            <div className="profileAboutHeader">
                <p>About</p>
                <EditRoundedIcon />
            </div>
            <div className="profileAboutText">
                <p>I am a recent Computer Science undergraduate from The University of British Columbia. I'm passionate about building applications, solving difficult problems, and self learning. I'm looking for a position where I can build on my skills and be able to make meaningful contributions. I possess strong analytical, numerical abilities and team working capabilities.
                </p>
            </div>
            <div className="profileAboutSkillsContainer">
                <div>
                    <DiamondRoundedIcon />
                    <div className="profileAboutSkills">
                        <p>Top skills</p>
                        <p>JavaScript</p>
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