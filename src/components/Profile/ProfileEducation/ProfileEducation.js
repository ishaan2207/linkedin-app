import React from "react";
import './ProfileEducation.css';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

function ProfileEducation() {
    const educations = [
        {
            image: 'https://media.licdn.com/dms/image/v2/C4E0BAQH415qlDBkj8Q/company-logo_100_100/company-logo_100_100/0/1630608877834/universityofbc_logo?e=1742428800&v=beta&t=BVeTzzidtEd4AyNSTxynxF-dFS5W-QgpkwJ2DGw0H7E',
            location: 'The University of British Columbia',
            field: 'Bachelor of Science - BS, Computer Science',
            dates: 'Sep 2020 - Apr 2024'
        },
        {
            image: 'https://media.licdn.com/dms/image/v2/C510BAQHFgUsY39WNBQ/company-logo_100_100/company-logo_100_100/0/1631363667157?e=1742428800&v=beta&t=068q6sQ5WXCtc8r9Y0uynSCzMImywqTKGi_U5jF8Wjg',
            location: 'The Shri Ram School',
            field: 'Grade XII, Science and Computer Science',
            dates: '2008 - 2020'
        }
    ]

    return (
        <div className="profileEducationContainer">
            <div className="profileEducationHeader">
                <p>Education</p>
                <div className="profileHeaderButtons">
                    <button><AddIcon style={{ height: '30px', width: '30px', marginRight: '20px' }} /></button>
                    <button><EditIcon /></button>
                </div>
            </div>
            <div className="profileEducation">
                {educations.map((education, index) => (
                    <div>
                        <div className="educationsContainer">
                            <div className="profileEducationImage">
                                <img src={education.image} />
                            </div>
                            <div className="profileEducationDescription">
                                <div className="educationLocation">{education.location}</div>
                                <div className="educationField">{education.field}</div>
                                <div className="educationDates">{education.dates}</div>
                                <div className="profileEducationSkills">
                                    <DiamondOutlinedIcon style={{ height: '18px', width: '18px' }} />
                                    <span>Object-Oriented Programming (OOP), Software Development and +4 skills</span>
                                </div>
                            </div>
                        </div>
                        {index !== educations.length - 1 && (
                            <div className="separator"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfileEducation;