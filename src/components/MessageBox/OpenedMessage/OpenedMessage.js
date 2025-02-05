// deps
import React, { useState } from "react";

// styles
import './OpenedMessage.css';

// components
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import CloseIcon from '@mui/icons-material/Close';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import GifOutlinedIcon from '@mui/icons-material/GifOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';

// apis
import { updateMessage } from "../../../utils/apis/message";

function OpenedMessage({ message, openedMessages, setOpenedMessages, minimized, setFocusedMessages, setOtherMessages }) {
    const [isMinimized, setIsMinimized] = useState(minimized);

    const [messageText, setMessageText] = useState('');

    const handleCloseOpenedMessage = (closeMessage) => {
        const updateOpenedMessages = openedMessages.filter(openedMessage => openedMessage !== closeMessage);
        setOpenedMessages(updateOpenedMessages);
    }

    const handleSubmit = () => {
        const newMessage = {
            text: messageText,
            timeSent: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            senderId: '1',
            senderName: 'Ishaan Gupta',
        };
        updateMessage(message?._id, newMessage);
        setFocusedMessages(prevMessages =>
            prevMessages.map(prevMessage =>
                prevMessage._id === message._id ?
                    { ...prevMessage, messages: [...prevMessage.messages, newMessage] } : prevMessage
            )
        );
        setOtherMessages(prevMessages =>
            prevMessages.map(prevMessage =>
                prevMessage._id === message._id ?
                    { ...prevMessage, messages: [...prevMessage.messages, newMessage] } : prevMessage
            )
        );
    }

    return (
        <div className="openedMessageMainContainer">
            {isMinimized ?
                <div>
                    <div className="openedMessageHeader">
                        <div className="openedMessageHeaderLeft">
                            <img src={message?.user2?.image} alt="" />
                            <div>
                                <p>{message?.user2?.firstName + ' ' + message?.user2?.lastName}</p>
                                <span>Available on mobile</span>
                            </div>
                        </div>
                        <div className="openedMessageHeaderRight">
                            <button><MoreHorizIcon style={{ height: '20px', width: '20px' }} /></button>
                            <button><VideoCallIcon style={{ height: '20px', width: '20px' }} /></button>
                            <button><CloseFullscreenIcon style={{ height: '20px', width: '20px' }} /></button>
                            <button onClick={() => handleCloseOpenedMessage(message)}>
                                <CloseIcon style={{ height: '20px', width: '20px' }} />
                            </button>
                        </div>
                    </div>
                </div>
                :
                <div className="openedMessageContainer">
                    <div className="openedMessageHeader">
                        <div className="openedMessageHeaderLeft">
                            <img src={message?.user2?.image} alt="" />
                            <div>
                                <p>{message?.user2?.firstName + ' ' + message?.user2?.lastName}</p>
                                <span>Available on mobile</span>
                            </div>
                        </div>
                        <div className="openedMessageHeaderRight">
                            <button><MoreHorizIcon style={{ height: '20px', width: '20px' }} /></button>
                            <button><VideoCallIcon style={{ height: '20px', width: '20px' }} /></button>
                            <button><CloseFullscreenIcon style={{ height: '20px', width: '20px' }} /></button>
                            <button onClick={() => handleCloseOpenedMessage(message)}>
                                <CloseIcon style={{ height: '20px', width: '20px' }} />
                            </button>
                        </div>
                    </div>
                    <div className="messageChatUserInfoContainer">
                        <div>
                            <img src={message?.user2?.image} alt="" />
                        </div>
                        <div className="messageChatUserInfo">
                            <p className="messageChatUsername">
                                <span>{message?.user2?.firstName + ' ' + message?.user2?.lastName}</span>
                                <VerifiedUserOutlinedIcon style={{ height: '16px', width: '16px', color: '#00000099', margin: '0 0 0 4px' }} />
                                <CircleIcon style={{ height: '2px', width: '2px', color: '#00000099', margin: '0 4px' }} />
                                <span className="degreeOfConnection">1st</span>
                            </p>
                            <p className="messageChatUserBio">{message?.user2?.bio}</p>
                        </div>
                    </div>

                    <div className="messageChatDateContainer">
                        <div className="separator"></div>
                        <div className="messageChatDate">{message?.messages[0]?.timeSent}</div>
                        <div className="separator"></div>
                    </div>

                    <div className="messageChatBody">
                        <div className="messageChatBodyRight">
                            {message?.messages?.map((chat, key) => (
                                <div key={key} className="messageContainer" id={chat.senderId === '1' ? 'sentByUser' : ''}>
                                    <div className="messageChatBodyLeft">
                                        <img src={message?.user2?.image} alt="" />
                                    </div>
                                    <div className="messageContentContainer">
                                        <div className="messageSender">
                                            <span>{chat.senderName}</span>
                                            <CircleIcon style={{ height: '3px', width: '3px', color: '#00000099', margin: '0 4px' }} />
                                            <span className="messageChatTimeStamp">{chat.timeSent}</span>
                                        </div>
                                        <div className="messageBody"><span>{chat.text}</span></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="largeSeparator">
                        <div className="separator"></div>
                        <div className="separator"></div>
                        <div className="separator"></div>
                    </div>

                    <div className="messageChatTextBoxContainer">
                        <textarea placeholder="Write a message..." value={messageText}
                            onChange={event => setMessageText(event.target.value)}></textarea>
                        <div>
                            <KeyboardArrowUpIcon />
                        </div>
                    </div>

                    <div className="separator"></div>
                    <div className="messageChatButtons">
                        <div className="messageChatButtonsLeft">
                            <button><ImageOutlinedIcon style={{ height: '20px', width: '20px' }} /></button>
                            <button><AttachFileOutlinedIcon style={{ height: '20px', width: '20px' }} /></button>
                            <button><GifOutlinedIcon style={{ height: '25px', width: '25px' }} /></button>
                            <button><SentimentSatisfiedOutlinedIcon style={{ height: '20px', width: '20px' }} /></button>
                        </div>
                        <div className="messageChatButtonsRight">
                            <button onClick={handleSubmit}>Send</button>
                            <MoreHorizIcon />
                        </div>
                    </div>
                </div>
            }

        </div>

    )
}

export default OpenedMessage;