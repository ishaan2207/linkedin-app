import React from "react";
import './ManageNetwork.css';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import NewspaperIcon from '@mui/icons-material/Newspaper';

function ManageNetwork() {
    const networkIcons = [
        {
            icon: <PeopleAltIcon />,
            text: 'Connections',
            num: 166
        },
        {
            icon: <BookIcon />,
            text: 'Contacts',
            num: 97
        },
        {
            icon: <PersonIcon />,
            text: 'Following & followers'
        },
        {
            icon: <GroupsIcon />,
            text: 'Groups'
        },
        {
            icon: <CalendarMonthIcon />,
            text: 'Events'
        },
        {
            icon: <ArticleIcon />,
            text: 'Pages',
            num: 18
        },
        {
            icon: <NewspaperIcon />,
            text: 'Newsletters'
        }
    ]

    return (
        <div className="manageNetworkContainer">
            <div className="manageNetworkHeader">
                Manage my network
            </div>
            <div className="separator"></div>
            <div className="manageNetworkIconsContainer">
                {networkIcons.map(networkIcon => (
                    <div className="networkIconContainer">
                        <div className="manageNetworkIcon">{networkIcon.icon}</div>
                        <div className="manageNetworkIconText">{networkIcon.text}</div>
                        {networkIcon.num && <div className="manageNetworkIconNum">{networkIcon.num}</div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ManageNetwork;