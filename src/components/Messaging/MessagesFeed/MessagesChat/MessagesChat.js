import React from "react";
import './MessagesChat.css';

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

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
            <div className="messageChatUserInfo">
                <div>
                    <img src={message.img} />
                </div>
                <div>
                    <p>{message.firstName + ' ' + message.lastName}</p>
                    <p>{message.userBio}</p>
                </div>
            </div>
        </div>
    )
}

export default MessagesChat;