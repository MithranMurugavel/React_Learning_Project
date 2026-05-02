import React from 'react'
import Menulist from './menulist'
import './style.css'
const TreeView = ({ menu }) => {

    return (
        <div className="tree-view-container">
            <Menulist list={menu} />
        </div>
    )
}

export default TreeView
