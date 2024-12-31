import React, { useState } from "react";
import './MessageBox.css';
import { useMessage } from "../../Context/MessageContext";
import OpenedMessage from "./OpenedMessage/OpenedMessage";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditNoteIcon from '@mui/icons-material/EditNote';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

function MessageBox() {
    const { messages } = useMessage();

    const [focusedMessages, setFocusedMessages] = useState(messages.slice(0, messages.length / 2));
    const [otherMessages, setOtherMessages] = useState(messages.slice(messages.length / 2, messages.length - 1));

    const [selectedMessages, setSelectedMessages] = useState(focusedMessages);
    const [openedMessages, setOpenedMessages] = useState([]);

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

    const handleFocusedClick = () => {
        setSelectedMessages(focusedMessages);
    }

    const handleOthersClick = () => {
        setSelectedMessages(otherMessages);
    }

    return (
        <div className="messagesWidget">
            <div className="openedMessagesContainer">
                {openedMessages.map((openedMessage, index) => (
                    <div className="openedMessage">
                        {console.log(openedMessages.length, index, openedMessages.length - 4)}
                        <OpenedMessage
                            message={openedMessage} setOpenedMessages={setOpenedMessages} openedMessages={openedMessages}
                            minimized={openedMessages.length > 3 && index <= openedMessages.length - 4}
                        />
                    </div>
                ))}
            </div>
            <div className="messageBoxContainer">
                <div className="messageBoxHeader">
                    <div className="messageBoxHeaderLeft">
                        <img src="https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740614400&v=beta&t=bWv9b_Ra7d2SHm0f-_h8R0s7tOpCyv1gftdU5Litv6U" />
                        <p>Messaging</p>
                    </div>
                    <div className="messageBoxHeaderRight">
                        <button><MoreHorizIcon style={{ color: '#000000BF', marginRight: '8px' }} /></button>
                        <button><EditNoteIcon style={{ color: '#000000BF', marginRight: '5px' }} /></button>
                        <button><KeyboardArrowUpIcon style={{ color: '#000000BF', marginRight: '5px' }} /></button>
                    </div>
                </div>
                <div className="separator"></div>
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
                    {selectedMessages.map(message => (
                        <div className="messageBoxMessage" onClick={() => handleOpenMessage(message)}>
                            <img src={message.img} />
                            <div className="messageBoxMessageRight">
                                <div className="messageSender">
                                    <span className="messageSenderName">{message.firstName + ' ' + message.lastName}</span>
                                    <span>{message.date}</span>
                                </div>
                                <p className="messageBoxMessageText">
                                    {message.text.length > 50 ? message.firstName + ": " + message.text.slice(0, 50) + '...' : message.firstName + ": " + message.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MessageBox;