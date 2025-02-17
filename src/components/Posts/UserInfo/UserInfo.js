import React from "react";
import './UserInfo.css';

import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import AddIcon from '@mui/icons-material/Add';

function UserInfo({ postedBy, createdAt }) {
    const userDesignation = 'Founder & CEO @ People Group | Tech & D2C Builder & Investor 🦈 @Shark Tank India';

    return (
        <div className="userInfoContainer">
            <div className="userProfilePicture">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699309825094?e=1740614400&v=beta&t=mZFI7qaZgbNl4g8ilVpeQX5YXM3bTesolnDTaZlLdRA" alt="" />
            </div>
            <div className="userProfileInformation">
                <div className="userPostTitle">
                    <div className="userProfileName">{postedBy}</div>
                    <CircleIcon style={{ fontSize: '4px', color: 'grey' }} />
                    <div className="connectionDegree">3rd+</div>
                </div>
                <div className="userProfileDesignation">
                    {userDesignation.length > 50 ? `${userDesignation.slice(0, 55)}...` : userDesignation}
                </div>
                <div className="postDate">
                    <p>{createdAt}</p>
                    <CircleIcon style={{ fontSize: '4px', color: 'grey', marginRight: '3px' }} />
                    <PublicOutlinedIcon style={{ fontSize: '16px', color: 'grey', }} />
                </div>
            </div>
            <div className="followButton">
                <div><AddIcon /></div>
                <p>Follow</p>
            </div>
        </div>
    )
}

export default UserInfo;