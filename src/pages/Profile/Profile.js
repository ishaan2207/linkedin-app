// deps
import React from "react";

// styles
import './Profile.css';

// containers
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