import React from "react";
import './ProfileAnalytics.css';

import VisibilityIcon from '@mui/icons-material/Visibility';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function ProfileAnalytics() {
    return (
        <div className="profileAnalyticsContainer">
            <p>Analytics</p>
            <div className="privateToYou">
                <VisibilityIcon style={{ height: '18px', width: '18px' }} />
                <p>Private to you</p>
            </div>
            <div className="profileAnalyticsInfoContainer">
                <div className="profileViewsAnalyticsContainer">
                    <PeopleAltIcon />
                    <div className="profileViewsAnalytics">
                        <p>15 profile views</p>
                        <p>Discover who's viewed your profile.</p>
                    </div>
                </div>
                <div className="postImpressionsAnalyticsContainer">
                    <BarChartIcon />
                    <div className="postImpressionsAnalytics">
                        <p>0 post impressions</p>
                        <p>Start a post to increase engagement.</p>
                        <p>Past 7 days</p>
                    </div>
                </div>
                <div className="searchAppearancesAnalyticsContainer">
                    <SearchIcon />
                    <div className="searchAppearancesAnalytics">
                        <p>23 search appearances</p>
                        <p>See how often you appear in search results.</p>
                    </div>
                </div>
            </div>
            <div className="separator"></div>
            <div className="showAllAnalyticsButtonContainer">
                <p>Show all analytics</p>
                <ArrowRightAltIcon />
            </div>
        </div>
    )
}

export default ProfileAnalytics;