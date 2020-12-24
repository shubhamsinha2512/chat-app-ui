import React from 'react'

import './Message.css'
import {Avatar} from '@material-ui/core'

function Message(props) {
    return (
        <div className={`message ${props.classes}`}>
            <Avatar className="messageAvatar" />
            <div className="messageContainer" >
                <p className="messageBody" >This is a message</p>
                <span className="messageTime" >3:22 pm</span>
            </div>
        </div>
    )
}

export default Message
