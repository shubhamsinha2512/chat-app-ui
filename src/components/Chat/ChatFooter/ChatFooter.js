import React from 'react'
import {useState} from 'react'

import './ChatFooter.css'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';

function ChatFooter({updateMessage}) {
    
    // console.log(updateMessage);
    const [msg, setMsg] = useState('');
    // console.log(msg);

    const handleSend = (event)=>{
        event.preventDefault();
        if(msg !== ''){
            updateMessage(1, msg, "p");
            setMsg('');
        }
        
    }

    return (
        <div className="chatFooter">
            <IconButton>
                <InsertEmoticonIcon />
            </IconButton>


            <form onSubmit={handleSend} className="chatFooter_form">
                <div className="chatFooter_message">
                    <input className="chatFooter_messageInput" value={msg} placeholder="Type a message..." onChange={(e)=> setMsg(e.target.value)} />
                </div>
                <button type="submit" className="chatFooter_sendBtn">
                    <IconButton>
                        <SendIcon />
                    </IconButton>
                </button>
            </form>
        </div>
    )
}

export default ChatFooter
