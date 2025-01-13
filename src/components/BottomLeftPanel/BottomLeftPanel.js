// deps
import React from "react";
import { useNavigate } from "react-router-dom";

// styles
import './BottomLeftPanel.css';

// components
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventIcon from '@mui/icons-material/Event';
import { width } from "@mui/system";

// constants
import { BOTTOM_PANEL } from "../../constants/texts/Home/homeBottomPanel";

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
                <p>{BOTTOM_PANEL.SAVED}</p>
            </div>
            <div className="buttonPanelIcons" onClick={goToGroups}>
                <GroupsIcon style={ICON_STYLES} />
                <p>{BOTTOM_PANEL.GROUPS}</p>
            </div>
            <div className="buttonPanelIcons" onClick={goToNewsletters} >
                <NewspaperIcon style={ICON_STYLES} />
                <p>{BOTTOM_PANEL.NEWSLETTERS}</p>
            </div>
            <div className="buttonPanelIcons" onClick={goToEvents}>
                <EventIcon style={ICON_STYLES} />
                <p>{BOTTOM_PANEL.EVENTS}</p>
            </div>
        </div>
    )
}

export default BottomLeftPanel;