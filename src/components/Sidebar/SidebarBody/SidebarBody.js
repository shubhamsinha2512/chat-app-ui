import React from 'react'

import './SidebarBody.css'
import SidebarChat from './SidebarChat/SidebarChat'

function SidebarBody({chats, onChatSelect}) {
    // console.log(chats);


    return (
        <div className="sidebarBody">
            {chats.map((chat, index)=>{
                // console.log(chat, index);
                return <SidebarChat key={index} chat={chat} onClick={() => {console.log("clicked")}} />
            })}
        </div>
    )
}

export default SidebarBody