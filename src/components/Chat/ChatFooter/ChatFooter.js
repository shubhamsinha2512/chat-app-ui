import React from 'react'

import './ChatFooter.css'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';

function ChatFooter() {

    

    return (
        <div className="chatFooter">
            <IconButton>
                <InsertEmoticonIcon />
            </IconButton>


            <form className="chatFooter_form">
                <div className="chatFooter_message">
                    <input className="chatFooter_messageInput" placeholder="Type a message..."/>
                </div>
                <button onClick={e => e.preventDefault()} className="chatFooter_sendBtn">
                    <IconButton>
                        <SendIcon />
                    </IconButton>
                </button>
            </form>
        </div>
    )
}

export default ChatFooter
