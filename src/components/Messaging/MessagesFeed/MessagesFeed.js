// deps
import React, { useEffect, useState } from "react";

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

    const [selectedMessageId, setSelectedMessageId] = useState(messages.length > 0 ? messages[0]?._id : '');
    const [selectedMessage, setSelectedMessage] = useState(messages.length > 0 ? messages[0] : '');

    const [viewableColumn, setViewableColumn] = useState('left');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 650);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleSelectedMessage = (message) => {
        setSelectedMessageId(message?._id);
        setSelectedMessage(message);

        if (isMobile) {
            setViewableColumn('right');
        }
    }

    const handleBackToLeft = () => {
        setViewableColumn('left');
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
                {messageFeedButtons.map((messageFeedButton, key) => <button key={key} className="messagesFeedButtonShared">
                    {messageFeedButton}</button>)}
            </div>
            <div className="separator"></div>

            <div className="messagesFeedColumns">
                {(viewableColumn === 'left' || !isMobile) && (
                    <div className="messagesFeedLeftColumn">
                        {messages?.map((message, key) => (
                            <div
                                key={key}
                                className={`messagePreviewContainer ${selectedMessageId === message?._id ? 'selected' : ''}`}
                                onClick={() => handleSelectedMessage(message)}>
                                <div className="messagePreviewUserImage"><img src={message?.user2.image} alt="" /></div>
                                <div className="messageInformation">
                                    <div>
                                        <p>{message?.user2.firstName + ' ' + message?.user2.lastName}</p>
                                        <p className="messageInformationDate">{message?.messages[0].timeSent}</p>
                                    </div>
                                    <p>{message?.user2.firstName + ': ' + (message?.messages[0].text.length > 35 
                                        ? (message?.messages[0].text.slice(0, 35) + '...') : message?.messages[0].text)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {(viewableColumn === 'right' || !isMobile) && (
                    <div className="messagesFeedRightColumn" >
                        <MessagesChat message={selectedMessage} handleBackToLeft={handleBackToLeft} isMobile={isMobile} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default MessagesFeed;