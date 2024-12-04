import React from "react";
import './BottomLeftPanel.css';
import { useNavigate } from "react-router-dom";

import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventIcon from '@mui/icons-material/Event';
import { width } from "@mui/system";

function BottomLeftPanel() {
    const navigate = useNavigate();

    const ICON_STYLES = { height: '20px', width: '20px' }

    function goToSavedItems() {
        navigate('/saved-items');
    }

    function goToGroups() {
        navigate('/groups');
    }

    function goToNewsletters() {
        navigate('/newsletters');
    }

    function goToEvents() {
        navigate('/events');
    }

    return (
        <div className="buttonPanelContainer">
            <div className="buttonPanelIcons" onClick={goToSavedItems}>
                <BookmarkIcon style={ICON_STYLES} />
                <p>Saved items</p>
            </div>
            <div className="buttonPanelIcons" onClick={goToGroups}>
                <GroupsIcon style={ICON_STYLES} />
                <p>Groups</p>
            </div>
            <div className="buttonPanelIcons" onClick={goToNewsletters} >
                <NewspaperIcon style={ICON_STYLES} />
                <p>Newsletters</p>
            </div>
            <div className="buttonPanelIcons" onClick={goToEvents}>
                <EventIcon style={ICON_STYLES} />
                <p>Events</p>
            </div>
        </div>
    )
}

export default BottomLeftPanel;