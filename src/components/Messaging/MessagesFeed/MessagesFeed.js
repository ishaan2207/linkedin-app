import React from "react";
import './MessagesFeed.css';

import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

function MessagesFeed({ messages }) {
    return (
        <div className="messagesFeedContainer">
            <div className="messagesFeedHeader">
                <div className="messagesFeedHeaderLeft">
                    <p>Messaging</p>
                    <div className="messagesFeedInputContainer">
                        <SearchIcon style={{ marginLeft: '8px', height: '20px', width: '20px' }} />
                        <input type="text" placeholder="Search messages" />
                    </div>
                </div>
                <div className="messagesFeedHeaderRight">
                    <MoreHorizIcon style={{ height: '30px', width: '30px', color: '#000000BF', marginRight: '10px' }} />
                    <EditNoteOutlinedIcon style={{ height: '30px', width: '30px', color: '#000000BF' }} />
                </div>
            </div>
            <div className="separator"></div>
            <div className="messagesFeedButtons">
                <button className="messagesFeedFocusedButton"><span>Focused</span> <ArrowDropDownOutlinedIcon /></button>
                <div className="divider"></div>
                <button className="messagesFeedButtonShared">Unread</button>
                <button className="messagesFeedButtonShared">My Connections</button>
                <button className="messagesFeedButtonShared">InMail</button>
                <button className="messagesFeedButtonShared">Starred</button>
            </div>
            <div className="separator"></div>

            <div className="messagesFeedColumns">
                <div className="messagesFeedLeftColumn">
                    {messages.map(message => (
                        <div className="messagePreviewContainer">
                            <div className="messagePreviewUserImage"><img src={message.img} /></div>
                        </div>
                    ))}
                </div>
                <div className="messagesFeedRightColumn">
                    message text
                </div>
            </div>
        </div>
    )
}

export default MessagesFeed;