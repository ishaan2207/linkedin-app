// deps
import React from "react";

// styles
import './CreatePost.css';

// components
import SendIcon from '@mui/icons-material/Send';

// constants
import { CREATE_POST_ICONS } from "../../constants/mocks/Home/homeCreatePost";

function CreatePost({ createNewPost, createPostInput, setCreatePostInput }) {
    return (
        <div className="createPostContainer">
            <div className="createPostInput">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699309825094?e=1740614400&v=beta&t=mZFI7qaZgbNl4g8ilVpeQX5YXM3bTesolnDTaZlLdRA" alt="userProfileImage" />
                <input
                    type="text" placeholder="Start a post, try writing with AI"
                    value={createPostInput}
                    onChange={(event) => setCreatePostInput(event.target.value)}>
                </input>
                <button onClick={createNewPost}><SendIcon /></button>
            </div>
            <div className="createPostButtonsContainer">
                {CREATE_POST_ICONS.map((createPostIcon, key) => (
                    <div className="createPostButton" key={key}>
                        <div className="postButtonIcon">{createPostIcon.icon}</div>
                        <p className="postButtonText">{createPostIcon.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CreatePost;