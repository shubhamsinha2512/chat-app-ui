import React from 'react'

// import PropTypes from 'prop-types'
// import ScrollToBottom from 'scroll-to-bottom'
import './ChatBody.css'
import Message from './Message/Message'

function ChatBody({messages}) {

    return (
            <div className="chatBody">
                {messages.map((message, i)=>{
                // console.log(message);
                    return <Message key={i} body={message.body} classes={message.type === 'p' ? "messageStyle-p" : "messageStyle-s"} />
                })}
            </div>
        )
    }

export default ChatBody
