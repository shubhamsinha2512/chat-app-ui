import React from 'react'
import './SidebarChat.css'

import {Avatar} from '@material-ui/core'

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_details">
                <h3>Name</h3>
                <p>msg</p>
            </div>

        </div>
    )
}

export default SidebarChat