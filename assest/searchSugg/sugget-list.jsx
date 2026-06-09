import React from 'react'

const SuggList = ({data,handleClick}) => {
  return (
    <ul style={{listStyleType: "none"}}>
      {
        data && data.length ? data.map((items,index) => <li onClick ={handleClick} key={index}>{items}</li>):null
      }
    </ul>
  )
}

export default SuggList
