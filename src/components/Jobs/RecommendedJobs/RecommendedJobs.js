// deps
import React, { useState } from "react";

// styles
import './RecommendedJobs.css';

// components
import CloseIcon from '@mui/icons-material/Close';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function RecommendedJobs({ RECOMMENDED_JOBS, RECOMMENDED_JOBS_TEXTS }) {
    const [showJob, setShowJob] = useState([]);

    const handleHideJob = (job) => {
        setShowJob(prev => [...prev, job]);
    }

    return (
        <div className="recommendedJobsContainer">
            <div className="recommendedJobsHeaderContainer">
                <p className="recommendedJobsHeader">{RECOMMENDED_JOBS_TEXTS.HEADER}</p>
                <p className="recommendedJobsSubtext">{RECOMMENDED_JOBS_TEXTS.HEADER_SUB}</p>
            </div>
            <div className="recommendedJobsList">
                {RECOMMENDED_JOBS.map((RECOMMENDED_JOB, key) => (
                    <div key={key} className="recommendedJobContainer" style={{ display: showJob.includes(key) ? 'none' : 'block' }}>
                        <div className="recommendedJob">
                            <div className="recommendedJobLeft">
                                <img src={RECOMMENDED_JOB.image} alt="" />
                                <div className="recommendedJobInfo">
                                    <p className="recJobTitle"><span>{RECOMMENDED_JOB.title}</span><VerifiedUserOutlinedIcon style={{ height: '16px', width: '16px', color: '#00000099' }} /></p>
                                    <div className="recJobCompanyLocation">
                                        <p>{RECOMMENDED_JOB.company + ' - ' + RECOMMENDED_JOB.location}</p>
                                    </div>
                                    <p className="recJobLocationMain">{RECOMMENDED_JOB.location}</p>
                                </div>
                            </div>
                            <div className="recommendedJobRight">
                                <button onClick={() => handleHideJob(key)}><CloseIcon style={{ height: '20px', width: '20px' }} /></button>
                            </div>
                        </div>
                        {key !== RECOMMENDED_JOBS.length - 1 ? <div className="separator"></div> : ''}
                    </div>

                ))}
            </div>
            <div className="separator"></div>
            <div className="recJobsShowAll">
                <button>Show all<span><ArrowRightAltIcon /></span></button>
            </div>
        </div>
    )
}

export default RecommendedJobs;