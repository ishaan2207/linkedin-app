import React from "react";
import './ProfileActivity.css';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

function ProfileActivity() {
    return (
        <div className="profileActivityContainer">
            <div className="profileActivityHeaderContainer">
                <div className="profileActivityHeader">
                    <div className="profileActivityText">
                        <p>Activity</p>
                        <p>167 followers</p>
                    </div>
                    <button>Create a post</button>
                </div>
                <EditRoundedIcon />
            </div>

            <div className="profileActivityBody">
                <p>You haven't posted yet</p>
                <p>Posts you share will be displayed here.</p>
            </div>

            <div className="separator"></div>
            <div className="profileActivityShowMore">
                <p>Show all activity</p>
                <ArrowForwardRoundedIcon style={{ height: '20px', width: '18px' }} />
            </div>
        </div>
    )
}

export default ProfileActivity;