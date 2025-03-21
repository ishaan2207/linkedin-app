import React from "react";
import './PostButtons.css';

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import SendIcon from '@mui/icons-material/Send';
import { useLikes } from "../../../Context/LikesContext";
import { useState } from "react";

// apis
import { likePost } from "../../../utils/apis/posts";

function PostButtons({ setPostLikes, postInfo }) {
    const { updateLikeUsername } = useLikes();
    const [likedByUser, setLikedByUser] = useState(false);

    function updateLikes() {
        if (!likedByUser) {
            setPostLikes(prev => prev + 1);
            updateLikeUsername('You');
            setLikedByUser(true);
        } else {
            setPostLikes(prev => prev - 1);
            updateLikeUsername('Raunak Khanna');
            setLikedByUser(false);
        }
        likePost(postInfo);
    }

    const styles = { height: '20px', width: '20px' }

    const postButtons = [
        {
            icon: <ThumbUpOutlinedIcon style={styles} />,
            text: 'Like',
            onClick: updateLikes
        },
        {
            icon: <CommentOutlinedIcon style={styles} />,
            text: 'Comment',
            onClick: null
        },
        {
            icon: <SyncOutlinedIcon style={styles} />,
            text: 'Repost',
            onClick: null
        },
        {
            icon: <SendIcon style={styles} />,
            text: 'Send',
            onClick: null
        }
    ]

    return (
        <div className="postButtonsContainer">
            {postButtons.map((postButton, key) => (
                <div className="postButtons" key={key} onClick={postButton.onClick}
                    style={{ color: postButton.text === 'Like' && likedByUser ? '#0A66C2' : '' }}>
                    <div className="postButtonIcon">{postButton.icon}</div>
                    <div className="postButtonText">{postButton.text}</div>
                </div>
            ))}
        </div>
    )
}

export default PostButtons;