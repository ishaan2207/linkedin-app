import React from "react";
import './PostInteractions.css';

import { useLikes } from "../../../Context/LikesContext";

function PostInteractions({ postLikes, comments, shares }) {
    const { likeUsername } = useLikes();

    return (
        <div>
            <div className="postInteractionsContainer">
                <div className="postReactions">
                    <img src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" />
                    <p>{likeUsername} and {postLikes - 1} others</p>
                </div>
                <div className="postComments">
                    {comments} comments
                </div>
            </div>
            <div className="separator"></div>
        </div>

    )
}

export default PostInteractions;