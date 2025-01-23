// deps
import React from "react";

// styles
import './MainFeed.css';

// components
import VerifyBanner from "../../../components/Jobs/VerifyBanner/VerifyBanner";
import RecommendedJobs from "../../../components/Jobs/RecommendedJobs/RecommendedJobs";
import RecentSearches from "../../../components/Jobs/RecentSearches/RecentSearches";

// constants
import { RECOMMENDED_JOBS_TEXTS, RECOMMENDED_SOFTWARE_TEXTS } from "../../../constants/texts/Jobs/recommendedJobs";
import { RECOMMENDED_JOBS, RECOMMENDED_SOFTWARE_JOBS } from "../../../constants/mocks/Jobs/recommendedJobs";

function MainFeed() {
    return (
        <div>
            <RecommendedJobs RECOMMENDED_JOBS={RECOMMENDED_JOBS} RECOMMENDED_JOBS_TEXTS={RECOMMENDED_JOBS_TEXTS} />
            <VerifyBanner />
            <RecentSearches />
            <RecommendedJobs RECOMMENDED_JOBS={RECOMMENDED_SOFTWARE_JOBS} RECOMMENDED_JOBS_TEXTS={RECOMMENDED_SOFTWARE_TEXTS} />
        </div>
    )
}

export default MainFeed;