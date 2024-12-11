import React from "react";
import Posts from "../Posts/Posts";

function AllPosts({ allPosts }) {

    return (
        <div>
            {allPosts.map(post => (
                <Posts postInfo={post} />
            ))}
        </div>
    )
}

export default AllPosts;