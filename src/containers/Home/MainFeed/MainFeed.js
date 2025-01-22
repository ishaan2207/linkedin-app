// deps
import React, { useState, useEffect } from "react";

// styles
import './MainFeed.css';

// components
import CreatePost from "../../../components/CreatePost/CreatePost";
import AllPosts from "../../../components/AllPosts/AllPosts";
import ProfileSummary from "../../../components/ProfileSummary/ProfileSummary";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// constants
// import { allPostsArray } from "../../../constants/mocks/Home/homeMainFeed";

// apis
import { fetchAllPosts, createPost } from "../../../utils/apis/posts";

function MainFeed() {

    const [allPosts, setAllPosts] = useState([]);
    const [createPostInput, setCreatePostInput] = useState('');

    useEffect(() => {
        fetchAllPosts().then(data => setAllPosts(data));
    }, [])

    function createNewPost() {
        const newPost = {
            postId: (allPosts.length + 1) + '',
            postedBy: 'Ishaan Gupta',
            postContent: createPostInput,
            createdAt: '2024-12-10T17:00:00Z',
            likes: Math.floor(Math.random() * 161) + 40,
            comments: Math.floor(Math.random() * 41) + 15,
            shares: Math.floor(Math.random() * 21) + 10,
            userId: (allPosts.length + 1) + '',
        }
        createPost(newPost);
        setAllPosts([newPost, ...allPosts])
        setCreatePostInput('');
    }

    return (
        <div className="mainFeedContainer">
            <div className="hiddenProfile">
                <ProfileSummary />
                <button className="hiddenShowMoreButton"><span>Show more</span><KeyboardArrowDownIcon /></button>
            </div>
            <CreatePost createNewPost={createNewPost} createPostInput={createPostInput} setCreatePostInput={setCreatePostInput} />
            <AllPosts allPosts={allPosts} />
        </div>
    )
}

export default MainFeed;