// deps
import React from "react";

// styles
import './Messages.css';

// contexts
import { MessageProvider, useMessage } from '../../Context/MessageContext';

// components
import MessagingPage from "./MessagingPage/MessagingPage";

function Messages() {
    const { messages } = useMessage();

    return (
        <div className="messagesContainer">
            <MessagingPage messages={messages} />
        </div>
    )
}

export default Messages;