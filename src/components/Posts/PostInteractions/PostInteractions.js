import React from "react";
import './PostInteractions.css';

function PostInteractions() {
    return (
        <div>
            <div className="postInteractionsContainer">
                <div className="postReactions">
                    <img src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" />
                    <p>Raunak Khanna and 28 others</p>
                </div>
                <div className="postComments">
                    2 comments
                </div>
            </div>
            <div className="separator"></div>
        </div>

    )
}

export default PostInteractions;