import React from "react";
import './PostContent.css';
import { useState } from "react";

function PostContent({ postContent }) {
    const [hideFullText, setHideFullText] = useState(postContent.length > 75);
    console.log(postContent.length)

    function displayFullText() {
        setHideFullText(prev => !prev)
    }

    return (
        <div className="postContentContainer">
            <div className="postText">
                {hideFullText ? (
                    <div>
                        <p>
                            {postContent.slice(0, 75)}  <span onClick={displayFullText}>...more</span>
                        </p>
                    </div>
                ) : postContent}
            </div>
            <div className="postImage">
                <img alt="postImage" src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?cs=srgb&dl=pexels-tara-winstead-8386440.jpg&fm=jpg" />
            </div>
        </div>
    )
}

export default PostContent;