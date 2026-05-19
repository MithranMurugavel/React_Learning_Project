import React, { useState } from 'react'
import './style.css'
const Tab = ({ tabdata }) => {
    const [currIndex, setCurrIndex] = useState(0);

    function handleOnClick(getIndex) {
        setCurrIndex(getIndex)
    }

    return (

        <div className="wrapped">
            <div className="tabs">
                {
                    tabdata.map((Items, index) => <div key={index} onClick={() => handleOnClick(index)} className={`tab-item ${currIndex == index ? "active" : ""}`}>{Items.label}</div>)
                }
            </div>
            <div className="content">
                {
                    tabdata[currIndex].content
                }
            </div>
        </div>
    )
}

export default Tab
