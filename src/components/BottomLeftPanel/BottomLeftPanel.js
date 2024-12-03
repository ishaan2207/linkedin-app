import React from "react";
import './BottomLeftPanel.css';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventIcon from '@mui/icons-material/Event';
import { width } from "@mui/system";

function BottomLeftPanel() {
    const ICON_STYLES = { height: '20px', width: '20px' }


    return (
        <div className="buttonPanelContainer">
            <div className="buttonPanelIcons">
                <BookmarkIcon style={ICON_STYLES} />
                <p>Saved items</p>
            </div>
            <div className="buttonPanelIcons">
                <GroupsIcon style={ICON_STYLES} />
                <p>Groups</p>
            </div>
            <div className="buttonPanelIcons">
                <NewspaperIcon style={ICON_STYLES} />
                <p>Newsletters</p>
            </div>
            <div className="buttonPanelIcons">
                <EventIcon style={ICON_STYLES} />
                <p>Events</p>
            </div>
        </div>
    )
}

export default BottomLeftPanel;