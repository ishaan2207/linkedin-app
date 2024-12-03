import React from "react";
import './ProfileStatistics.css';

function ProfileStatistics() {
    const profileViews = 14;

    return (
        <div className="profileStatisticsContainer">
            <div className="profileViewsContainer">
                <p>Profile viewers</p>
                <p id="viewsValue">{profileViews}</p>
            </div>
            <p>View all analytics</p>
        </div>
    )
}

export default ProfileStatistics;