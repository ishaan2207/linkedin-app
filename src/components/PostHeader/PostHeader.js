// deps
import React from "react";

// styles
import './PostHeader.css';

// components
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

// constants
import { POST_HEADER } from "../../constants/mocks/Home/homePostHeader";

function PostHeader({ deletePost, setAllPosts, allPosts, postId }) {
    function removePost(id) {
        const updatedPosts = allPosts.filter(post => post.postId !== id);
        setAllPosts(updatedPosts);
    }

    return (
        <div className="postHeader">
            <div className="postHeaderContainer">
                <div className="postHeaderUsers">
                    <img src={POST_HEADER.IMG} alt="" />
                    <p><b>{POST_HEADER.USER}</b> likes this</p>
                </div>
                <div className="postHeaderButtons">
                    <button><MoreHorizOutlinedIcon style={{ marginRight: '7px', height: '22px', width: '22px' }} /></button>
                    <button onClick={() => deletePost(postId).then(() => removePost(postId))}><CloseOutlinedIcon style={{ marginRight: '7px', height: '22px', width: '22px' }} /></button>
                </div>
            </div>
            <div className="separator"></div>
        </div>
    )
}

export default PostHeader;