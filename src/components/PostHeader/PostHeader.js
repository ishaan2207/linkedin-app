// deps
import React from "react";

// styles
import './PostHeader.css';

// components
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

// constants
import { POST_HEADER } from "../../constants/mocks/Home/homePostHeader";

function PostHeader() {
    return (
        <div className="postHeader">
            <div className="postHeaderContainer">
                <div className="postHeaderUsers">
                    <img src={POST_HEADER.IMG} alt="" />
                    <p><b>{POST_HEADER.USER}</b> likes this</p>
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