// deps
import React from "react";

// styles
import './CollapsedJobTab.css';

// components
import ListIcon from '@mui/icons-material/List';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function CollapsedJobTab() {
    return (
        <div className="collapsedJobShow">
            <div className="collapsedJobTabContainer">
                <div className="collapsedTabLeft">
                    <span><ListIcon style={{ height: '24px', widht: '24px', color: '#000000BF' }} /></span>
                    <p>Preferences</p>
                </div>
                <div className="collapsedTabRight">
                    <p>More</p>
                    <span><KeyboardArrowDownIcon /></span>
                </div>
            </div>
        </div>
    )
}

export default CollapsedJobTab;