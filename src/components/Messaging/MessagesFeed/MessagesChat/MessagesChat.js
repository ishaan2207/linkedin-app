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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function MessagesChat({ message, handleBackToLeft, isMobile }) {
    console.log('message', message);
    return (
        <div className="messageChatContainer">
            <div className="messageChatHeader">
                <div className="messageChatHeaderLeft">
                    {isMobile ? <button onClick={handleBackToLeft}><ArrowBackIcon /></button> : ''}
                    <div>
                        <p className="messageChatHeaderUsername">{message?.user2?.firstName + ' ' + message?.user2?.lastName}</p>
                        <p className="messageChatHeaderUserStatus">Available on mobile</p>
                    </div>
                </div>
                <div className="messageChatHeaderRight">
                    <MoreHorizOutlinedIcon style={{ height: '30px', width: '30px', marginRight: '8px' }} />
                    <VideoCallIcon style={{ height: '30px', width: '30px', marginRight: '8px' }} />
                    <StarBorderOutlinedIcon style={{ height: '27px', width: '27px', marginBottom: '2px' }} />
                </div>
            </div>
            <div className="separator"></div>
            <div className="messageChatExtendingContainer">
                <div className="messageChatUserInfoContainer">
                    <div>
                        <img src={message?.user2?.image} alt=""/>
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
                    <div className="messageChatDate">{message?.messages.length > 0 ? message?.messages[0]?.timeSent : ''}</div>
                    <div className="separator"></div>
                </div>
                <div className="messageChatBody">
                    <div className="messageChatBodyLeft">
                        <img src={message?.user2?.image} alt=""/>
                    </div>
                    <div className="messageChatBodyRight">
                        {message?.messages.map((chat, key) => (
                            <div key={key}>
                                <div className="messageSender">
                                    <span>{chat.senderName}</span>
                                    <CircleIcon style={{ height: '3px', width: '3px', color: '#00000099', margin: '0 4px' }} />
                                    <span className="messageChatTimeStamp">{chat.timeSent}</span>
                                </div>
                                <div className="messageBody">{chat.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="messageChatBottomSection">
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

        </div>
    )
}

export default MessagesChat;