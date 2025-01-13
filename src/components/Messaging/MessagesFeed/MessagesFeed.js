// deps
import React, { useState } from "react";

// styles
import './MessagesFeed.css';

// components
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import MessagesChat from "./MessagesChat/MessagesChat";

function MessagesFeed({ messages }) {
    const messageFeedButtons = ['Unread', 'My Connections', 'InMail', 'Starred'];

    const [selectedMessageId, setSelectedMessageId] = useState(messages[0]);
    const [selectedMessage, setSelectedMessage] = useState(messages[0]);

    const handleSelectedMessage = (message) => {
        setSelectedMessageId(message.id);
        setSelectedMessage(message);
        console.log(selectedMessage)
    }

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
                {messageFeedButtons.map(messageFeedButton => <button className="messagesFeedButtonShared">{messageFeedButton}</button>)}
            </div>
            <div className="separator"></div>

            <div className="messagesFeedColumns">
                <div className="messagesFeedLeftColumn">
                    {messages.map(message => (
                        <div
                            key={message.id}
                            className={`messagePreviewContainer ${selectedMessageId === message.id ? 'selected' : ''}`}
                            onClick={() => handleSelectedMessage(message)}>
                            <div className="messagePreviewUserImage"><img src={message.img} /></div>
                            <div className="messageInformation">
                                <div>
                                    <p>{message.firstName + ' ' + message.lastName}</p>
                                    <p className="messageInformationDate">{message.date}</p>
                                </div>
                                <p>{message.firstName + ': ' + (message.text.length > 35 ? (message.text.slice(0, 35) + '...') : message.text)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="messagesFeedRightColumn">
                    <MessagesChat message={selectedMessage} />
                </div>
            </div>
        </div>
    )
}

export default MessagesFeed;