import React from "react";
import './PostButtons.css';

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import SendIcon from '@mui/icons-material/Send';

function PostButtons() {
    const styles = { height: '20px', width: '20px' }

    const postButtons = [
        {
            icon: <ThumbUpOutlinedIcon style={styles} />,
            text: 'Like'
        },
        {
            icon: <CommentOutlinedIcon style={styles} />,
            text: 'Comment'
        },
        {
            icon: <SyncOutlinedIcon style={styles} />,
            text: 'Repost'
        },
        {
            icon: <SendIcon style={styles} />,
            text: 'Send'
        }
    ]

    return (
        <div className="postButtonsContainer">
            {postButtons.map(postButton => (
                <div className="postButtons">
                    <div className="postButtonIcon">{postButton.icon}</div>
                    <div className="postButtonText">{postButton.text}</div>
                </div>
            ))}
        </div>
    )
}

export default PostButtons;