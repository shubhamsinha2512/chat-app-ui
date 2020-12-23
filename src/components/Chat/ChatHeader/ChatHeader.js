import React from 'react'
import './ChatHeader.css'
import DeleteIcon from '@material-ui/icons/Delete';

function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeader_details" >
                <h2>Name</h2>
            </div>
            <div className="chatHeader_delete">
                <DeleteIcon />
            </div>
        </div>
    )
}

export default ChatHeader
