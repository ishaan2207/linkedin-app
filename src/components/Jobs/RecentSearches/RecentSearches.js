// deps
import React from "react";

// styles
import './RecentSearches.css';

// components
import CircleIcon from '@mui/icons-material/Circle';

function RecentSearches() {
    return (
        <div className="recentSearchesContainer">
            <div className="recentSearchesHeader">
                <p>Recent job searches</p>
                <button>Clear</button>
            </div>
            <div className="recentJobSearch">
                <div className="recentJobTitle">
                    <span>software developer</span>
                    <CircleIcon style={{ height: '2px', width: '2px', margin: '0 5px' }} />
                    <p>11 new</p>
                </div>
                <div className="recentJobLocation">
                    <span>Gurugram, Haryana, India</span>
                    <CircleIcon style={{ height: '2px', width: '2px', margin: '0 5px' }} />
                    <p>Entry level</p>
                </div>
            </div>
        </div>
    )
}

export default RecentSearches;