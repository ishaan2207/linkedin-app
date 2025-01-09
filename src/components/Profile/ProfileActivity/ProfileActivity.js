// deps
import React from "react";

// styles
import './ProfileActivity.css';

// components
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

// constants
import { PROFILE_ACTIVITY } from "../../../constants/texts/Profile/profileActivity";

function ProfileActivity() {
    return (
        <div className="profileActivityContainer">
            <div className="profileActivityHeaderContainer">
                <div className="profileActivityHeader">
                    <div className="profileActivityText">
                        <p>{PROFILE_ACTIVITY.ACTIVITY}</p>
                        <p>{PROFILE_ACTIVITY.FOLLLOWERS}</p>
                    </div>
                    <button>{PROFILE_ACTIVITY.CREATE_POST}</button>
                </div>
                <EditRoundedIcon />
            </div>

            <div className="profileActivityBody">
                <p>{PROFILE_ACTIVITY.NO_POSTS}</p>
                <p>{PROFILE_ACTIVITY.POSTS_SHARED_HERE}</p>
            </div>

            <div className="separator"></div>
            <div className="profileActivityShowMore">
                <p>{PROFILE_ACTIVITY.ALL_ACTIVITY}</p>
                <ArrowForwardRoundedIcon style={{ height: '20px', width: '18px' }} />
            </div>
        </div>
    )
}

export default ProfileActivity;