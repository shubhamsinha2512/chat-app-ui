import React from 'react'

import ChatHeader from './ChatHeader/ChatHeader'
import ChatBody from './ChatBody/ChatBody'
import ChatFooter from './ChatFooter/ChatFooter'
import './Chat.css'

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </div>
    )
}

export default Chat
