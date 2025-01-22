// deps
import React from "react";

// styles
import './JobsTabs.css';

// components
import ListIcon from '@mui/icons-material/List';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ArticleIcon from '@mui/icons-material/Article';
import EditNoteIcon from '@mui/icons-material/EditNote';

function JobsTabs() {
    const styles = { height: '26px', width: '26px', color: '#000000BF' }
    const tabsIcons = [
        {
            icon: <ListIcon style={styles} />,
            text: 'Preferences'
        },
        {
            icon: <BookmarkIcon style={styles} />,
            text: 'My jobs'
        },
        {
            icon: <ArticleIcon style={styles} />,
            text: 'Interview prep'
        }
    ]

    return (
        <div className="jobsTabsContainer">
            <div className="jobTabsIconsContainer">
                {tabsIcons.map((tabsIcon, key) => (
                    <div className="jobsTabIcon" key={key}>
                        <span>{tabsIcon.icon}</span>
                        <p>{tabsIcon.text}</p>
                    </div>
                ))}
            </div>
            <div className="separator"></div>
            <div className="jobsTabsPostJob">
                <span><EditNoteIcon style={{ height: '30px', width: '30px' }} /></span>
                <p>Post a free job</p>
            </div>
        </div>
    )
}

export default JobsTabs;