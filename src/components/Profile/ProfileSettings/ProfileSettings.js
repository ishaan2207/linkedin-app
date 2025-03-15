// deps
import React from "react";

// styles
import './ProfileSettings.css';

// components
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

// constants
import { PROFILE_SETTINGS_SECTION } from "../../../constants/texts/Profile/profileSettings";

function ProfileSettings() {
    return (
        <div className="profileSettingsContainer">
            {PROFILE_SETTINGS_SECTION.map((profileSettingSection, key) => (
                <div className="profileSettingDivContainer" key={key}>
                    <div className="profileSettingHeader">
                        <p>{profileSettingSection.header}</p>
                        <EditOutlinedIcon />
                    </div>
                    <div className="profileSettingText">
                        {profileSettingSection.text}
                    </div>
                    {key !== PROFILE_SETTINGS_SECTION.length - 1 ? <div className="separator"></div> : ''}
                </div>
            ))}
        </div>
    )
}

export default ProfileSettings;