import React, { useState } from "react";
import './NotificationsToggle.css';

function NotificationsToggle({ setSelectedToggle }) {
    const [selectedButton, setSelectedButton] = useState("all");

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        setSelectedToggle(buttonName);
    };

    return (
        <div className="notificationsToggleContainer">
            <button
                className={`notificationsToggleAll notificationsToggleCommon ${selectedButton === "all" ? "selected" : ""}`}
                onClick={() => handleButtonClick("all")}
            >
                All
            </button>
            <button
                className={`notificationsToggleJobs notificationsToggleCommon ${selectedButton === "jobs" ? "selected" : ""}`}
                onClick={() => handleButtonClick("jobs")}
            >
                Jobs
            </button>
            <button
                className={`notificationsTogglePosts notificationsToggleCommon ${selectedButton === "myposts" ? "selected" : ""}`}
                onClick={() => handleButtonClick("myposts")}
            >
                My posts
            </button>
            <button
                className={`notificationsToggleMentions notificationsToggleCommon ${selectedButton === "mentions" ? "selected" : ""}`}
                onClick={() => handleButtonClick("mentions")}
            >
                Mentions
            </button>
        </div>
    )
}

export default NotificationsToggle;