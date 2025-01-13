// deps
import React from "react";
import { useNavigate } from "react-router-dom";

// styles
import './ProfileStatistics.css';

// constants
import { PROFILE_STATS } from "../../constants/texts/Home/homeProfileStatistics";

function ProfileStatistics() {
    const navigate = useNavigate();

    const profileViews = 14;

    function goToAnalytics() {
        navigate('/analytics')
    }

    return (
        <div className="profileStatisticsContainer" onClick={goToAnalytics}>
            <div className="profileViewsContainer">
                <p>{PROFILE_STATS.NUM_VIEWS}</p>
                <p id="viewsValue">{profileViews}</p>
            </div>
            <p>{PROFILE_STATS.VIEW_ALL}</p>
        </div>
    )
}

export default ProfileStatistics;