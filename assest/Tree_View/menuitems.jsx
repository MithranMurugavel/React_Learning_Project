import React, { useState } from 'react'
import Menulist from './menulist'

const MenuItems = ({ items }) => {

  const [display,setdisplay] = useState({});
  function handleToggleClick(getCurrent){
          setdisplay({...display,[getCurrent]:!display[getCurrent]})
  }
  return (
    <li>
      <div style={{'display':'flex','gap':'20px', 'cursor':'pointer'}} onClick={()=> handleToggleClick(items.label)} className="menu-item">
        <p>
        {items.label}
      </p>
      {
        items.children && items.children.length ? (<span >{display[items.label] ? '-': '+'}</span>):null
      }
      </div>
      {
        items && items.children && items.children.length && display[items.label]> 0 ? (<Menulist list={items.children}/>) : null
      }

    </li>
  );
}

export default MenuItems
