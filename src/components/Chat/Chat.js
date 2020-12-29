import React from 'react'
import {useState, useEffect} from 'react';

import ChatHeader from './ChatHeader/ChatHeader'
import ChatBody from './ChatBody/ChatBody'
import ChatFooter from './ChatFooter/ChatFooter'
import './Chat.css'

function Chat({chats, updateMessage}) {

    // console.log(chats[0]);
    
    
    var name = chats[0].name, messages = chats[0].messages;
    // console.log(name, messages);
    
    return (
        <div className="chat">
            <ChatHeader name={name} />
            <ChatBody messages={messages} />
            <ChatFooter updateMessage={updateMessage} />
        </div>
    )
}

export default Chat
