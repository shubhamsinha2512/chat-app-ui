import React from 'react'

import './ChatBody.css'
import Message from './Message/Message'

function ChatBody() {
    
    return (
        <div className="chatBody">
            <Message classes="messageStyle-p"/>
            <Message classes="messageStyle-s"/>
            <Message classes="messageStyle-p"/>
            <Message classes="messageStyle-p"/>
            <Message classes="messageStyle-s"/>
            <Message classes="messageStyle-p"/>
            <Message classes="messageStyle-s"/>
            <Message classes="messageStyle-p"/>
            <Message classes="messageStyle-s"/>
            <Message classes="messageStyle-s"/>
        </div>
    )
}

export default ChatBody
