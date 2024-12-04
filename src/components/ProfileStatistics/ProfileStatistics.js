import React from "react";
import './ProfileStatistics.css';
import { useNavigate } from "react-router-dom";

function ProfileStatistics() {
    const navigate = useNavigate();

    const profileViews = 14;

    function goToAnalytics() {
        navigate('/analytics')
    }

    return (
        <div className="profileStatisticsContainer" onClick={goToAnalytics}>
            <div className="profileViewsContainer">
                <p>Profile viewers</p>
                <p id="viewsValue">{profileViews}</p>
            </div>
            <p>View all analytics</p>
        </div>
    )
}

export default ProfileStatistics;