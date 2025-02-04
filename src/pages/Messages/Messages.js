// deps
import React, { useEffect, useState } from "react";

// styles
import './Messages.css';

// contexts
// import { MessageProvider, useMessage } from '../../Context/MessageContext';

// components
import MessagingPage from "./MessagingPage/MessagingPage";

// apis
import fetchMessages from "../../utils/apis/message";

function Messages() {
    // const { messages } = useMessage();
    const [allMessages, setAllMessages] = useState([]);

    useEffect(() => {
        fetchMessages('1').then(data => setAllMessages(data));
    }, [])

    return (
        <div className="messagesContainer">
            <MessagingPage messages={allMessages} />
        </div>
    )
}

export default Messages;