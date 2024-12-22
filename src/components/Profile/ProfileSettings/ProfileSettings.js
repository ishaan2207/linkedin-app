import React from "react";
import './ProfileSettings.css';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function ProfileSettings() {
    const profileSettingSections = [
        {
            header: 'Profile Language',
            text: 'English'
        },
        {
            header: 'Public profile & URL',
            text: 'www.linkedin.com/in/ishaan-gupta-34505518b'
        }
    ]

    return (
        <div className="profileSettingsContainer">
            {profileSettingSections.map((profileSettingSection, index) => (
                <div className="profileSettingDivContainer">
                    <div className="profileSettingHeader">
                        <p>{profileSettingSection.header}</p>
                        <EditOutlinedIcon />
                    </div>
                    <div className="profileSettingText">
                        {profileSettingSection.text}
                    </div>
                    {index !== profileSettingSections.length - 1 ? <div className="separator"></div> : ''}
                </div>
            ))}
        </div>
    )
}

export default ProfileSettings;