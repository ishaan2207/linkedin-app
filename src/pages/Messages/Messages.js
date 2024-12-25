import React from "react";
import './Messages.css';
import MessagingPage from "./MessagingPage/MessagingPage";
import { MessageProvider, useMessage } from '../../Context/MessageContext';

function Messages() {
    const { messages } = useMessage();

    return (
        <div className="messagesContainer">
            <MessagingPage messages={messages} />
        </div>
    )
}

export default Messages;