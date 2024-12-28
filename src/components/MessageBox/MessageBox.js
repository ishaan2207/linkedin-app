import React from "react";
import './MessageBox.css';
import { useMessage } from "../../Context/MessageContext";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditNoteIcon from '@mui/icons-material/EditNote';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

function MessageBox() {
    const { messages } = useMessage();

    return (
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
        </div>
    )
}

export default MessageBox;