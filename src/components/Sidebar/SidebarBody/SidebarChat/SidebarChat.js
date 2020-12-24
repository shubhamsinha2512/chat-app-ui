import React from 'react'
import './SidebarChat.css'

import {Avatar} from '@material-ui/core'

function SidebarChat({key, chat}) {
    // console.log(chat.name);
    // console.log(chat.messages[0].body);

    // console.log(name, message)
    return (
        <div className="sidebarChat">
            <Avatar src={`https://ui-avatars.com/api/?name=John+Doe`} />

            <div className="sidebarChat_details">
                <h3>{chat.name}</h3>
                <p>{chat.messages[0].body}</p>
            </div>
        </div>
    )
}

export default SidebarChat
