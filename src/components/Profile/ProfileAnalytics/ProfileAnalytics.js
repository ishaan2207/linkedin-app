// deps
import React from "react";

// styles
import './ProfileAnalytics.css';

// components
import VisibilityIcon from '@mui/icons-material/Visibility';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// constants
import { PROFILE_ANALYTICS } from "../../../constants/texts/Profile/profileAnalytics";

function ProfileAnalytics() {
    return (
        <div className="profileAnalyticsContainer">
            <p>{PROFILE_ANALYTICS.ANALYTICS}</p>
            <div className="privateToYou">
                <VisibilityIcon style={{ height: '18px', width: '18px' }} />
                <p>{PROFILE_ANALYTICS.PRIVATE}</p>
            </div>
            <div className="profileAnalyticsInfoContainer">
                <div className="profileViewsAnalyticsContainer">
                    <PeopleAltIcon />
                    <div className="profileViewsAnalytics">
                        <p>{PROFILE_ANALYTICS.PROFILE_VIEWS}</p>
                        <p>{PROFILE_ANALYTICS.VIEWED_BY}</p>
                    </div>
                </div>
                <div className="postImpressionsAnalyticsContainer">
                    <BarChartIcon />
                    <div className="postImpressionsAnalytics">
                        <p>{PROFILE_ANALYTICS.POST_IMPRESSIONS}</p>
                        <p>{PROFILE_ANALYTICS.START_POST}</p>
                        <p>{PROFILE_ANALYTICS.IMPRESSIONS_TIME}</p>
                    </div>
                </div>
                <div className="searchAppearancesAnalyticsContainer">
                    <SearchIcon />
                    <div className="searchAppearancesAnalytics">
                        <p>{PROFILE_ANALYTICS.SEARCH_APPEARANCES}</p>
                        <p>{PROFILE_ANALYTICS.APPEARANCES_OFTEN}</p>
                    </div>
                </div>
            </div>
            <div className="separator"></div>
            <div className="showAllAnalyticsButtonContainer">
                <p>{PROFILE_ANALYTICS.ALL_ANALYTICS}</p>
                <ArrowRightAltIcon />
            </div>
        </div>
    )
}

export default ProfileAnalytics;