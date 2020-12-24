import React from 'react'

import './Sidebar.css'
import SidebarHeader from './SidebarHeader/SidebarHeader'
import SidebarBody from './SidebarBody/SidebarBody'

function Sidebar({chats, onChatSelect}) {

    return (
        <div className="sidebar">
            <SidebarHeader className="sidebarHeader" />
            <SidebarBody className="sidebarBody" chats={chats} onChatSelect={onChatSelect} />
        </div>
    )
}

export default Sidebar
