// deps
import React from "react";

// components
import Posts from "../Posts/Posts";

function AllPosts({ allPosts }) {
    console.log(allPosts);
    return (
        <div>
            {allPosts.map(post => (
                <Posts postInfo={post} />
            ))}
        </div>
    )
}

export default AllPosts;