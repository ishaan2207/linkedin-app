import React, { useState } from "react";
import './MainFeed.css';

import CreatePost from "../../../components/CreatePost/CreatePost";
import AllPosts from "../../../components/AllPosts/AllPosts";

function MainFeed() {
    const allPostsArray = [
        {
            postId: "1",
            postedBy: "John Doe",
            postContent:
                "Excited to announce that I’ve joined ABC Corp as the new Director of Marketing. Looking forward to new challenges and growth!",
            createdAt: "2024-12-01T10:00:00Z",
            likes: 120,
            comments: 45,
            shares: 18,
        },
        {
            postId: "2",
            postedBy: "Jane Smith",
            postContent:
                "Just finished reading 'Atomic Habits' by James Clear. Highly recommend it for anyone looking to build better habits and achieve their goals.",
            createdAt: "2024-12-02T14:30:00Z",
            likes: 85,
            comments: 15,
            shares: 7,
        },
        {
            postId: "3",
            postedBy: "Michael Johnson",
            postContent:
                "A big thank you to my amazing team for their hard work on the XYZ project. Together, we’ve made it a huge success!",
            createdAt: "2024-12-02T16:00:00Z",
            likes: 150,
            comments: 30,
            shares: 22,
        },
        {
            postId: "4",
            postedBy: "Sarah Lee",
            postContent:
                "Had an incredible time speaking at the Global Leadership Summit. The discussions on innovation and leadership were truly inspiring.",
            createdAt: "2024-12-03T09:15:00Z",
            likes: 200,
            comments: 50,
            shares: 25,
        },
        {
            postId: "5",
            postedBy: "David Kim",
            postContent:
                "Thrilled to see the new AI-powered tool launch at TechCon 2024. It’s a game-changer for productivity!",
            createdAt: "2024-12-04T12:00:00Z",
            likes: 175,
            comments: 22,
            shares: 15,
        },
        {
            postId: "6",
            postedBy: "Emma Wilson",
            postContent:
                "Celebrating 5 years at my current role with XYZ Inc. It’s been an incredible journey and I’ve learned so much along the way.",
            createdAt: "2024-12-05T08:30:00Z",
            likes: 95,
            comments: 18,
            shares: 10,
        },
        {
            postId: "7",
            postedBy: "Mark Taylor",
            postContent:
                "Can’t believe it's been one year since I launched my startup! It’s been a wild ride and I’m excited for what the future holds.",
            createdAt: "2024-12-05T15:45:00Z",
            likes: 110,
            comments: 24,
            shares: 12,
        },
        {
            postId: "8",
            postedBy: "Sophia Brown",
            postContent:
                "Just completed a digital marketing certification! I’m eager to apply all my new skills and help brands achieve their goals.",
            createdAt: "2024-12-06T11:00:00Z",
            likes: 130,
            comments: 10,
            shares: 5,
        },
        {
            postId: "9",
            postedBy: "Chris Evans",
            postContent:
                "I’ve recently started working on a project aimed at sustainability in the fashion industry. It’s inspiring to see so many brands moving toward eco-friendly practices.",
            createdAt: "2024-12-06T13:30:00Z",
            likes: 140,
            comments: 35,
            shares: 8,
        },
        {
            postId: "10",
            postedBy: "Olivia Clark",
            postContent:
                "Reflecting on a year of growth and learning. It’s been challenging, but the rewards have been worth it. #Grateful #Growth",
            createdAt: "2024-12-07T10:20:00Z",
            likes: 160,
            comments: 40,
            shares: 20,
        },
        {
            postId: "11",
            postedBy: "Your Name",
            postContent:
                "Proud to share that my company is now officially certified as a B Corp! This is just the beginning of our commitment to sustainability and social impact.",
            createdAt: "2024-12-08T14:00:00Z",
            likes: 210,
            comments: 60,
            shares: 30,
        },
        {
            postId: "12",
            postedBy: "Liam Harris",
            postContent:
                "Looking forward to attending the upcoming Innovation Conference 2024. Can’t wait to connect with industry leaders and learn about the latest trends.",
            createdAt: "2024-12-09T09:00:00Z",
            likes: 180,
            comments: 50,
            shares: 16,
        },
    ];

    const [allPosts, setAllPosts] = useState(allPostsArray);
    const [createPostInput, setCreatePostInput] = useState('');

    function createNewPost() {
        const newPost = {
            postId: (allPosts.length + 1) + '',
            postedBy: 'Ishaan Gupta',
            postContent: createPostInput,
            createdAt: '2024-12-10T17:00:00Z',
            likes: Math.floor(Math.random() * 161) + 40,
            comments: Math.floor(Math.random() * 41) + 15,
            shares: Math.floor(Math.random() * 21) + 10
        }
        setAllPosts([...allPosts, newPost])
        setCreatePostInput('');
    }

    return (
        <div className="mainFeedContainer">
            <CreatePost createNewPost={createNewPost} createPostInput={createPostInput} setCreatePostInput={setCreatePostInput} />
            <AllPosts allPosts={allPosts} />
        </div>
    )
}

export default MainFeed;