import React from 'react'

import './SidebarHeader.css'
import SearchIcon from '@material-ui/icons/Search';

function SidebarHeader() {
    return (
        <div className="sidebarHeader">
            <form className="sidebarHeader_search">
                <input className="sidebarHeader_input" />
                <button className="sidebarHeader_search" placeholder="Search..." >
                    <SearchIcon />
                </button>
            </form>
        </div>
    )
}

export default SidebarHeader
