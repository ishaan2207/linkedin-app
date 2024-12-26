import React from "react";
import './MessageBox.css';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditNoteIcon from '@mui/icons-material/EditNote';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function MessageBox() {
    return (
        <div className="messageBoxContainer">
            <div className="messageBoxHeader">
                <div className="messageBoxHeaderLeft">
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740614400&v=beta&t=bWv9b_Ra7d2SHm0f-_h8R0s7tOpCyv1gftdU5Litv6U" />
                    <p>Messaging</p>
                </div>
                <div className="messageBoxHeaderRight">
                    <button><MoreHorizIcon /></button>
                    <button><EditNoteIcon /></button>
                    <button><KeyboardArrowUpIcon /></button>
                </div>
            </div>
        </div>
    )
}