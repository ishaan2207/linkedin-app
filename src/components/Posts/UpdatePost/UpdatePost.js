// deps
import React from "react";

// styles
import './UpdatePost.css';

// components
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

// apis
import { updatePost } from "../../../utils/apis/posts";

function UpdatePost({ showUpdatePost, setShowUpdatePost, selectedPost, setSelectedPost, updatePostsArray }) {
    const handleSubmitUpdate = (post) => {
        setShowUpdatePost('none');
        updatePost(post);
        updatePostsArray(post);
    }

    return (
        <div className="updatePostContainer" style={{ display: showUpdatePost }}>
            <div className="updatePostHeader">
                <p>Update post</p>
                <button onClick={() => setShowUpdatePost('none')}><CloseOutlinedIcon /></button>
            </div>
            <div className="separator"></div>
            <div className="updatePostBody">
                <div className="updatePostContent updatePostField">
                    <p>Post content</p>
                    <input type="text" value={selectedPost.postContent}
                        onChange={(event) => setSelectedPost({ ...selectedPost, postContent: event.target.value })}
                    />
                </div>
            </div>
            <div className="separator"></div>
            <div className="updatePostFooter">
                <button onClick={() => handleSubmitUpdate(selectedPost)}>Save</button>
            </div>
        </div>
    )
}

export default UpdatePost;