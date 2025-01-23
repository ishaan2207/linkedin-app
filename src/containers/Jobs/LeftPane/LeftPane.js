// deps
import React from "react";

// styles
import './LeftPane.css';

// components
import ProfileSummary from "../../../components/ProfileSummary/ProfileSummary";
import JobsTabs from "../../../components/Jobs/JobsTabs/JobsTabs";
import Footer from "../../../components/Footer/Footer";
import CollapsedJobTab from "../../../components/Jobs/CollapsedJobTab/CollapsedJobTab";

function LeftPane() {
    return (
        <div className="jobsLeftPaneContainer">
            <ProfileSummary />
            <JobsTabs />
            <CollapsedJobTab />
            <Footer />
        </div>
    )
}

export default LeftPane;