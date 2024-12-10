import React from "react";
import './PostContent.css';
import { useState } from "react";

function PostContent({ postContent }) {
    const postText = 'I am pleased to share that I have completed the LinkedIn Learning path \“Develop Your Prompt Engineering Skills.\” \n Prompt engineering is becoming increasingly vital for effective communication with AI models. As more professionals engage with language models, mastering this skill is essential for the future of work.\n Through this learning path, I have gained: \n- A comprehensive understanding of how language models function. \n- Techniques for effective interaction with these models. \n- Insights into advanced prompt engineering concepts. \n- Practical applications to enhance productivity.\n This knowledge equips me to unlock seamless interactions with large language models, paving the way for innovative solutions and improved efficiency.';
    const [hideFullText, setHideFullText] = useState(postText.length > 75);

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