// deps
import React from "react";

// styles
import './CreatePost.css';

// components
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

// constants
import { CREATE_POST_ICONS } from "../../constants/mocks/Home/homeCreatePost";

function CreatePost({ createNewPost, createPostInput, setCreatePostInput }) {
    return (
        <div className="createPostContainer">
            <div className="createPostInput">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1739404800&v=beta&t=DMt5wdHJBrrvZ16Bvq--C9FrmNCYj64W9z1_zA1lsOo" alt="userProfileImage" />
                <input
                    type="text" placeholder="Start a post, try writing with AI"
                    value={createPostInput}
                    onChange={(event) => setCreatePostInput(event.target.value)}>
                </input>
                <button onClick={createNewPost}>Submit</button>
            </div>
            <div className="createPostButtonsContainer">
                {CREATE_POST_ICONS.map(createPostIcon => (
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