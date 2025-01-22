// deps
import React from "react";

// styles
import './LeftPane.css';

// components
import ProfileSummary from "../../../components/ProfileSummary/ProfileSummary";
import JobsTabs from "../../../components/Jobs/JobsTabs/JobsTabs";
import Footer from "../../../components/Footer/Footer";

function LeftPane() {
    return (
        <div className="jobsLeftPaneContainer">
            <ProfileSummary />
            <JobsTabs />
            <Footer />
        </div>
    )
}

export default LeftPane;