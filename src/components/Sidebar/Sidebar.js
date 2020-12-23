import React from 'react'

import './Sidebar.css'
import SidebarHeader from './SidebarHeader/SidebarHeader'
import SidebarBody from './SidebarBody/SidebarBody'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarHeader className="sidebarHeader" />
            <SidebarBody className="sidebarBody" />
        </div>
    )
}

export default Sidebar
