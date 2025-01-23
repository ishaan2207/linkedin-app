// deps
import React from "react";

// components
import Posts from "../Posts/Posts";

function AllPosts({ allPosts, setAllPosts, deletePost }) {
    return (
        <div>
            {allPosts.map(post => (
                <Posts postInfo={post} setAllPosts={setAllPosts} deletePost={deletePost} allPosts={allPosts} />
            ))}
        </div>
    )
}

export default AllPosts;