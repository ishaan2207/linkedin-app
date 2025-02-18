// deps
import React, { useEffect, useState } from "react";

// styles
import './MessageBox.css';

// components
import OpenedMessage from "./OpenedMessage/OpenedMessage";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditNoteIcon from '@mui/icons-material/EditNote';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

// contexts
import { useUser } from "../../Context/UserContext";

// apis
import { fetchMessages } from "../../utils/apis/message";
import { fetchProfileInformation } from "../../utils/apis/profile";

function MessageBox() {

    const [messages, setMessages] = useState([]);

    const [userProfile, setUserProfile] = useState({});

    const [focusedMessages, setFocusedMessages] = useState([]);
    const [otherMessages, setOtherMessages] = useState([]);

    const { user } = useUser();

    useEffect(() => {
        fetchMessages('1').then(data => {
            setMessages(data);
            setFocusedMessages(data.slice(0, data.length / 2));
            setOtherMessages(data.slice(data.length / 2, data.length - 1));
        });
        fetchProfileInformation(user.userId).then(data => setUserProfile(data));
    }, [])

    const [selectedMessages, setSelectedMessages] = useState(focusedMessages);
    const [openedMessages, setOpenedMessages] = useState([]);
    const [showBody, setShowBody] = useState(false);

    const handleOpenMessage = (message) => {
        setOpenedMessages(prev => {
            if (!prev.includes(message)) {
                if (prev.length === 3) {
                    return [...prev.slice(1), message];
                }
                return [...prev, message]
            }
            return prev;
        })
    }

    useEffect(() => {
        if (showBody) {
            setSelectedMessages(focusedMessages)
        }
    }, [showBody, setSelectedMessages]);

    const handleFocusedClick = () => {
        setSelectedMessages(focusedMessages);
    }

    const handleOthersClick = () => {
        setSelectedMessages(otherMessages);
    }

    const handleShowBody = () => {
        setShowBody(prev => !prev);
    }

    return (
        <div className="messagesWidget">
            <div className="openedMessagesContainer">
                {openedMessages.map((openedMessage, index) => (
                    <div className="openedMessage" key={index}>
                        <OpenedMessage
                            message={openedMessage} setOpenedMessages={setOpenedMessages} openedMessages={openedMessages}
                            minimized={openedMessages.length > 3 && index <= openedMessages.length - 4}
                            setFocusedMessages={setFocusedMessages} setOtherMessages={setOtherMessages}
                        />
                    </div>
                ))}
            </div>
            <div className="messageBoxContainer">
                <div className="messageBoxHeader">
                    <div className="messageBoxHeaderLeft">
                        <img src={userProfile.image} alt="" />
                        <p>Messaging</p>
                    </div>
                    <div className="messageBoxHeaderRight">
                        <button><MoreHorizIcon style={{ color: '#000000BF', marginRight: '8px' }} /></button>
                        <button><EditNoteIcon style={{ color: '#000000BF', marginRight: '5px' }} /></button>
                        <button onClick={handleShowBody}><KeyboardArrowUpIcon style={{ color: '#000000BF', marginRight: '5px' }} /></button>
                    </div>
                </div>
                <div className="messageBoxBody" style={{ display: showBody ? 'block' : 'none' }}>
                    <div className="messageBoxSearchContainer">
                        <div className="messageBoxSearchInput">
                            <div className="messageBoxSearchInputLeft">
                                <SearchIcon style={{ color: '#00000099', height: '20px', width: '20px' }} />
                                <input type="search" placeholder="Search messages" />
                            </div>
                            <TuneIcon style={{ color: '#00000099', height: '20px', width: '20px', marginLeft: 'auto' }} />
                        </div>
                    </div>
                    <div className="messageBoxToggle">
                        <button className="toggleFocused" onClick={handleFocusedClick}>Focused</button>
                        <button className="toggleOther" onClick={handleOthersClick}>Other</button>
                    </div>
                    <div className="messageBoxMessagesContainer">
                        {selectedMessages.map((message, key) => (
                            <div className="messageBoxMessage" key={key} onClick={() => handleOpenMessage(message)}>
                                <img src={message?.user2?.image} />
                                <div className="messageBoxMessageRight">
                                    <div className="messageSender">
                                        <span className="messageSenderName">
                                            {message?.user2?.firstName + ' ' + message?.user2?.lastName}
                                        </span>
                                        <span>{message ? message?.messages[0]?.timeSent : ''}</span>
                                    </div>
                                    <p className="messageBoxMessageText">
                                        {message?.user2.firstName + ': ' + (message?.messages[0].text.length > 50
                                            ? (message?.messages[0].text.slice(0, 50) + '...') : message?.messages[0].text)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MessageBox;