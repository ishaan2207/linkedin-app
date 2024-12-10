import React from "react";
import './Posts.css';
import PostHeader from "../PostHeader/PostHeader";
import UserInfo from "./UserInfo/UserInfo";
import PostContent from "../PostHeader/PostContent/PostContent";
import PostInteractions from "./PostInteractions/PostInteractions";
import PostButtons from "./PostButtons/PostButtons";
import { LikesProvider } from "../../Context/LikesContext";

function Posts() {
    return (
        <div className="postContainer">
            <PostHeader />
            <UserInfo />
            <PostContent />
            <LikesProvider>
                <PostInteractions />
                <PostButtons />
            </LikesProvider>
        </div>
    )
}

export default Posts;