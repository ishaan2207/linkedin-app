import React, { useState } from "react";
import './Posts.css';
import PostHeader from "../PostHeader/PostHeader";
import UserInfo from "./UserInfo/UserInfo";
import PostContent from "../PostHeader/PostContent/PostContent";
import PostInteractions from "./PostInteractions/PostInteractions";
import PostButtons from "./PostButtons/PostButtons";
import { LikesProvider } from "../../Context/LikesContext";

function Posts({ postInfo }) {
    const { postId, postedBy, postContent, createdAt, likes, comments, shares } = postInfo;

    const [postLikes, setPostLikes] = useState(likes);

    return (
        <div className="postContainer">
            <PostHeader />
            <UserInfo postedBy={postedBy} createdAt={createdAt} />
            <PostContent postContent={postContent} />
            <LikesProvider>
                <PostInteractions likes={postLikes} comments={comments} shares={shares} />
                <PostButtons setPostLikes={setPostLikes} />
            </LikesProvider>
        </div>
    )
}

export default Posts;