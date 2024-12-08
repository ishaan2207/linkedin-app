import React from "react";
import './CreatePost.css';

import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

function CreatePost() {
    const createPostIcons = [
        {
            icon: <InsertPhotoOutlinedIcon style={{ color: '#0078FF' }} />,
            text: 'Photo',
        },
        {
            icon: <SmartDisplayIcon style={{ color: '#4CAF50' }} />,
            text: 'Video',
        },
        {
            icon: <ArticleOutlinedIcon style={{ color: '#FF5722' }} />,
            text: 'Write article',
        }
    ]

    return (
        <div className="createPostContainer">
            <div className="createPostInput">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1739404800&v=beta&t=DMt5wdHJBrrvZ16Bvq--C9FrmNCYj64W9z1_zA1lsOo" alt="userProfileImage" />
                <input type="text" placeholder="Start a post, try writing with AI"></input>
            </div>
            <div className="createPostButtonsContainer">
                {createPostIcons.map(createPostIcon => (
                    <div className="createPostButton">
                        <div className="postButtonIcon">{createPostIcon.icon}</div>
                        <p className="postButtonText">{createPostIcon.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CreatePost;