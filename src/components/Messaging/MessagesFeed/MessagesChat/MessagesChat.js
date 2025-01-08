// deps
import React from "react";

// styles
import './MessagesChat.css';

// components
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import GifOutlinedIcon from '@mui/icons-material/GifOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function MessagesChat({ message }) {
    return (
        <div className="messageChatContainer">
            <div className="messageChatHeader">
                <div className="messageChatHeaderLeft">
                    <p className="messageChatHeaderUsername">{message.firstName + ' ' + message.lastName}</p>
                    <p className="messageChatHeaderUserStatus">Available on mobile</p>
                </div>
                <div className="messageChatHeaderRight">
                    <MoreHorizOutlinedIcon style={{ height: '30px', width: '30px', marginRight: '8px' }} />
                    <VideoCallIcon style={{ height: '30px', width: '30px', marginRight: '8px' }} />
                    <StarBorderOutlinedIcon style={{ height: '27px', width: '27px', marginBottom: '2px' }} />
                </div>
            </div>
            <div className="separator"></div>
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
                    <KeyboardArrowUpOutlinedIcon />
                </div>
            </div>
            <div className="separator"></div>
            <div className="messageChatButtons">
                <div className="messageChatButtonsLeft">
                    <button><ImageOutlinedIcon /></button>
                    <button><AttachFileOutlinedIcon /></button>
                    <button><GifOutlinedIcon style={{ height: '40px', width: '40px' }} /></button>
                    <button><SentimentSatisfiedOutlinedIcon /></button>
                </div>
                <div className="messageChatButtonsRight">
                    <button>Send</button>
                    <MoreHorizIcon />
                </div>
            </div>
        </div>
    )
}

export default MessagesChat;