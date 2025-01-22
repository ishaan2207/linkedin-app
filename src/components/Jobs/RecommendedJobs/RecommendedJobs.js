// deps
import React from "react";

// styles
import './RecommendedJobs.css';

// components
import CloseIcon from '@mui/icons-material/Close';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CircleIcon from '@mui/icons-material/Circle';

// constants
import { RECOMMENDED_JOBS_TEXTS } from "../../../constants/texts/Jobs/recommendedJobs";
import { RECOMMENDED_JOBS } from "../../../constants/mocks/Jobs/recommendedJobs";

function RecommendedJobs() {
    return (
        <div className="recommendedJobsContainer">
            <div className="recommendedJobsHeader">
                <p>{RECOMMENDED_JOBS_TEXTS.HEADER}</p>
                <p>{RECOMMENDED_JOBS_TEXTS.HEADER_SUB}</p>
            </div>
            <div className="recommendedJobsList">
                {RECOMMENDED_JOBS.map((RECOMMENDED_JOB, key) => (
                    <div className="recommendedJob">
                        <div className="recommendedJobLeft">
                            <img src={RECOMMENDED_JOB.image} alt="" />
                            <div className="recommendedJobInfo">
                                <p className="recJobTitle">{RECOMMENDED_JOB.title}<span><VerifiedUserOutlinedIcon /></span></p>
                                <div className="recJobCompanyLocation">
                                    <p>{RECOMMENDED_JOB.company}</p>
                                    <CircleIcon />
                                    <p>{RECOMMENDED_JOB.location}</p>
                                </div>
                                <p className="recJobLocation">{RECOMMENDED_JOB.location}</p>
                            </div>
                        </div>
                        <div className="recommendedJobRight">
                            <button><CloseIcon /></button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="recJobsShowAll">
                <button>Show all<span><ArrowRightAltIcon /></span></button>
            </div>
        </div>
    )
}

export default RecommendedJobs;