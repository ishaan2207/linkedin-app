import React from "react";
import './Skills.css';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import EastIcon from '@mui/icons-material/East';

function Skills() {
    return (
        <div className="skillsContainer">
            <div className="skillsHeader">
                <span>Skills</span>
                <div className="skillsHeaderButtons">
                    <button><AddIcon style={{ height: '30px', width: '30px', marginRight: '20px' }} /></button>
                    <button><EditIcon /></button>
                </div>
            </div>
            <div className="skillInformationContainer">
                <div className="skillInformation">
                    <div className="skillTitle">React.js</div>
                    <div className="skillLearntFrom">
                        <img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" />
                        <span>Web Development Bootcamp 2024</span>
                    </div>
                </div>
                <div className="separator"></div>
                <div className="skillInformation">
                    <div className="skillTitle">Express.js</div>
                    <div className="skillLearntFrom">
                        <img src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" />
                        <span>Web Development Bootcamp 2024</span>
                    </div>
                </div>
            </div>
            <div className="showAllSkillsButton">
                <div className="separator"></div>
                <div className="showAllSkillsText">
                    <p><span>Show all 25 skills</span> <EastIcon style={{ height: '18px', width: '18px' }} /></p>
                </div>
            </div>
        </div>
    )
}

export default Skills;