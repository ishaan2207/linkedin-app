import React from "react";
import './OpenedMessage.css';

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

function OpenedMessage({ message, openedMessages, setOpenedMessages }) {
    const handleCloseOpenedMessage = (closeMessage) => {
        const updateOpenedMessages = openedMessages.filter(openedMessage => openedMessage !== closeMessage);
        setOpenedMessages(updateOpenedMessages);
    }

    return (
        <div className="openedMessageContainer">
            <div className="openedMessageHeader">
                <div className="openedMessageHeaderLeft">
                    <img src={message.img} />
                    <div>
                        <p>{message.firstName + ' ' + message.lastName}</p>
                        <span>Available on mobile</span>
                    </div>
                </div>
                <div className="openedMessageHeaderRight">
                    <button><MoreHorizIcon style={{ height: '20px', width: '20px' }} /></button>
                    <button><VideoCallIcon style={{ height: '20px', width: '20px' }} /></button>
                    <button><CloseFullscreenIcon style={{ height: '20px', width: '20px' }} /></button>
                    <button onClick={() => handleCloseOpenedMessage(message)}><CloseIcon style={{ height: '20px', width: '20px' }} /></button>
                </div>
            </div>
            <div className="messageChatUserInfoContainer">
                <div>
                    <img src={message.img} />
                </div>
                <div className="messageChatUserInfo">
                    <p className="messageChatUsername">
                        <span>{message.firstName + ' ' + message.lastName}</span>
                        <VerifiedUserOutlinedIcon style={{ height: '16px', width: '16px', color: '#00000099', margin: '0 0 0 4px' }} />
                        <CircleIcon style={{ height: '2px', width: '2px', color: '#00000099', margin: '0 4px' }} />
                        <span className="degreeOfConnection">1st</span>
                    </p>
                    <p className="messageChatUserBio">{message.userBio}</p>
                </div>
            </div>

            <div className="messageChatDateContainer">
                <div className="separator"></div>
                <div className="messageChatDate">{message.date}</div>
                <div className="separator"></div>
            </div>

            <div className="messageChatBody">
                <div className="messageChatBodyLeft">
                    <img src={message.img} />
                </div>
                <div className="messageChatBodyRight">
                    <div className="messageSender">
                        <span>{message.firstName + ' ' + message.lastName}</span>
                        <CircleIcon style={{ height: '3px', width: '3px', color: '#00000099', margin: '0 4px' }} />
                        <span className="messageChatTimeStamp">{message.timeSent}</span>
                    </div>
                    <div className="messageBody">{message.text}</div>
                </div>
            </div>

            <div className="largeSeparator">
                <div className="separator"></div>
                <div className="separator"></div>
                <div className="separator"></div>
            </div>

            <div className="messageChatTextBoxContainer">
                <textarea placeholder="Write a message..."></textarea>
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
                    <button>Send</button>
                    <MoreHorizIcon />
                </div>
            </div>
        </div>
    )
}

export default OpenedMessage;