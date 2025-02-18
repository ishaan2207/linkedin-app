// deps
import React from "react";

// components
import Posts from "../Posts/Posts";

function AllPosts({ allPosts, setAllPosts, deletePost, selectedPost, handleEditPost, userProfile }) {
    return (
        <div>
            {allPosts.map((post, key) => (
                <div key={key}>
                    <Posts postInfo={post} setAllPosts={setAllPosts} deletePost={deletePost} allPosts={allPosts}
                        selectedPost={selectedPost} handleEditPost={handleEditPost} userProfile={userProfile}
                    />
                </div>
            ))}
        </div>
    )
}

export default AllPosts;