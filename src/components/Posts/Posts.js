// deps
import React, { useState } from "react";

// styles
import './Posts.css';

// components
import PostHeader from "../PostHeader/PostHeader";
import UserInfo from "./UserInfo/UserInfo";
import PostContent from "../PostHeader/PostContent/PostContent";
import PostInteractions from "./PostInteractions/PostInteractions";
import PostButtons from "./PostButtons/PostButtons";

// contexts
import { LikesProvider } from "../../Context/LikesContext";

function Posts({ postInfo, setAllPosts, deletePost, allPosts, selectedPost, handleEditPost, userProfile }) {
    const { postId, postContent, createdAt, likes, comments, shares } = postInfo;

    const [postLikes, setPostLikes] = useState(likes);

    return (
        <div className="postContainer">
            <PostHeader deletePost={deletePost} setAllPosts={setAllPosts} allPosts={allPosts} postId={postId}
                selectedPost={selectedPost} postInfo={postInfo} handleEditPost={handleEditPost}
            />
            <UserInfo createdAt={createdAt} userProfile={userProfile} />
            <PostContent postContent={postContent} />
            <LikesProvider>
                <PostInteractions postLikes={postLikes} comments={comments} shares={shares} />
                <PostButtons setPostLikes={setPostLikes} postInfo={postInfo} />
            </LikesProvider>
        </div>
    )
}

export default Posts;