// deps
import React, { useState, useEffect } from "react";

// styles
import './MainFeed.css';

// components
import CreatePost from "../../../components/CreatePost/CreatePost";
import AllPosts from "../../../components/AllPosts/AllPosts";
import UpdatePost from "../../../components/Posts/UpdatePost/UpdatePost";
import ProfileSummary from "../../../components/ProfileSummary/ProfileSummary";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// contexts
import { useUser } from "../../../Context/UserContext.js";

// apis
import { fetchAllPosts, createPost, deletePost } from "../../../utils/apis/posts";
import { fetchProfileInformation } from "../../../utils/apis/profile.js";

function MainFeed() {

    const [allPosts, setAllPosts] = useState([]);
    const [createPostInput, setCreatePostInput] = useState('');
    const [showUpdatePost, setShowUpdatePost] = useState('none');
    const [selectedPost, setSelectedPost] = useState({});

    const [userProfile, setUserProfile] = useState({});
    const { user } = useUser();

    const handleEditPost = (post) => {
        setSelectedPost(post);
        setShowUpdatePost('block');
    }

    useEffect(() => {
        fetchAllPosts().then(data => setAllPosts(data));
        fetchProfileInformation(user.userId).then(data => setUserProfile(data));
    }, [])

    const updatePostsArray = (updatedPost) => {
        setAllPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.postId === updatedPost.postId ? updatedPost : post
            )
        );
    };

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
            likedByUser: false,
        }
        createPost(newPost).then(() => {
            setAllPosts([newPost, ...allPosts])
            setCreatePostInput('');
        })
    }

    return (
        <div className="mainFeedContainer">
            <div className="hiddenProfile">
                <ProfileSummary />
                <button className="hiddenShowMoreButton"><span>Show more</span><KeyboardArrowDownIcon /></button>
            </div>
            <UpdatePost showUpdatePost={showUpdatePost} setShowUpdatePost={setShowUpdatePost} selectedPost={selectedPost}
                setSelectedPost={setSelectedPost} updatePostsArray={updatePostsArray}
            />
            <CreatePost createNewPost={createNewPost} createPostInput={createPostInput} setCreatePostInput={setCreatePostInput}
                userProfile={userProfile} />
            <AllPosts allPosts={allPosts} setAllPosts={setAllPosts} deletePost={deletePost} selectedPost={selectedPost}
                handleEditPost={handleEditPost} userProfile={userProfile}
            />
        </div>
    )
}

export default MainFeed;