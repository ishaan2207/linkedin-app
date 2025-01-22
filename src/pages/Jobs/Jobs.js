// deps
import React from "react";

// styles
import './Jobs.css';

// components
import LeftPane from "../../containers/Jobs/LeftPane/LeftPane";
import MainFeed from "../../containers/Jobs/MainFeed/MainFeed";

function Jobs() {
    return (
        <div className="jobsContainer">
            <div className="jobsLeftPane">
                <LeftPane />
            </div>
            <div className="jobsMainFeed">
                <MainFeed />
            </div>
        </div>
    )
}

export default Jobs;