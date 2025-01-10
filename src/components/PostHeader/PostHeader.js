import React from "react";
import './PostHeader.css';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

function PostHeader() {

    return (
        <div className="postHeader">
            <div className="postHeaderContainer">
                <div className="postHeaderUsers">
                    <img src="https://media.licdn.com/dms/image/v2/D5603AQGhx5m18CwgLg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1704628438898?e=1739404800&v=beta&t=kuBst9Mkt7bDk1Ja-zjBTP-20O0IKX9bcThk1bGNAk8" alt="" />
                    <p><b>Advait Joshi</b> likes this</p>
                </div>
                <div className="postHeaderButtons">
                    <MoreHorizOutlinedIcon style={{ paddingRight: '7px' }} />
                    <CloseOutlinedIcon style={{ paddingRight: '7px' }} />
                </div>
            </div>
            <div className="separator"></div>
        </div>
    )
}

export default PostHeader;