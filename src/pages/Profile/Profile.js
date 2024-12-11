import React from "react";
import './Profile.css';
import MainFeed from "../../containers/Profile/MainFeed/MainFeed";
import RightPane from "../../containers/Profile/RightPane/RightPane";

function Profile() {
    return (
        <div className="profileContainer">
            <div className="profileMainFeed">
                <MainFeed />
            </div>
            <div className="profileRightPane">
                <RightPane />
            </div>
        </div>
    )
}

export default Profile;