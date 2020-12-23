import React from 'react'

import './SidebarBody.css'
import SidebarChat from './SidebarChat/SidebarChat'

function SidebarBody() {
    return (
        <div className="sidebarBody">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    )
}

export default SidebarBody
