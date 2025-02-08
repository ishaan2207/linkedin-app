// deps
import React, { useState, useEffect } from "react";

// styles
import './LeftPane.css';

// components
import ProfileSummary from "../../../components/ProfileSummary/ProfileSummary";
import JobsTabs from "../../../components/Jobs/JobsTabs/JobsTabs";
import Footer from "../../../components/Footer/Footer";
import CollapsedJobTab from "../../../components/Jobs/CollapsedJobTab/CollapsedJobTab";

// contexts
import { useUser } from "../../../Context/UserContext";

// apis
import { fetchProfileInformation } from "../../../utils/apis/profile";

function LeftPane() {
    const [userProfile, setUserProfile] = useState([]);
    const { userId } = useUser();

    useEffect(() => {
        fetchProfileInformation(userId).then(data => setUserProfile(data));
    }, []);

    return (
        <div className="jobsLeftPaneContainer">
            <ProfileSummary user={userProfile} />
            <JobsTabs />
            <CollapsedJobTab />
            <Footer />
        </div>
    )
}

export default LeftPane;