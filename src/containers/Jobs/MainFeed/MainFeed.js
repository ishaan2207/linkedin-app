// deps
import React from "react";

// styles
import './MainFeed.css';

// components
import VerifyBanner from "../../../components/Jobs/VerifyBanner/VerifyBanner";
import RecommendedJobs from "../../../components/Jobs/RecommendedJobs/RecommendedJobs";

function MainFeed() {
    return (
        <div>
            <RecommendedJobs />
            <VerifyBanner />
        </div>
    )
}

export default MainFeed;