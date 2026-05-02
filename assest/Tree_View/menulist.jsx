import React from 'react'
import MenuItems from './menuitems'
const Menulist = ({ list = [] }) => {

    return (
        <ul className="menu-item-container">

            {
                list && list.length > 0 ? list.map((listItems,index) => <MenuItems items={listItems} key={index}/>) : null
            }
        </ul>
    )
}

export default Menulist
