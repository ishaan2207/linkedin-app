import React, { useState } from "react";
import './NotificationsToggle.css';

function NotificationsToggle() {
    const [selectedButton, setSelectedButton] = useState("All");

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <div className="notificationsToggleContainer">
            <button
                className={`notificationsToggleAll notificationsToggleCommon ${selectedButton === "All" ? "selected" : ""}`}
                onClick={() => handleButtonClick("All")}
            >
                All
            </button>
            <button
                className={`notificationsToggleJobs notificationsToggleCommon ${selectedButton === "Jobs" ? "selected" : ""}`}
                onClick={() => handleButtonClick("Jobs")}
            >
                Jobs
            </button>
            <button
                className={`notificationsTogglePosts notificationsToggleCommon ${selectedButton === "Posts" ? "selected" : ""}`}
                onClick={() => handleButtonClick("Posts")}
            >
                My posts
            </button>
            <button
                className={`notificationsToggleMentions notificationsToggleCommon ${selectedButton === "Mentions" ? "selected" : ""}`}
                onClick={() => handleButtonClick("Mentions")}
            >
                Mentions
            </button>
        </div>
    )
}

export default NotificationsToggle;