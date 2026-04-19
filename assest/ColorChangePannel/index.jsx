import React, { useState } from 'react'
import {getRandomNumber} from '/utils/random'
import './style.css'
const ColorPanel = () => {

    const [colorcode, setColorCode] = useState(null);
    const [typeofcolor, setTypeofColor] = useState("#000000")
    function handleColorClickHex() {
        let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
        let hexval = "#"
        for (let i = 0; i < 6; i++) {
            hexval += arr[(getRandomNumber(arr.length))]
        }
        setTypeofColor(hexval);

    }
    function handleColorClickrgb() {
        let r = getRandomNumber(256);
        let g = getRandomNumber(256);
        let b = getRandomNumber(256);

        setTypeofColor(`rgb(${r},${g},${b})`)

    }

    return (

        <div className="clr-main" style={{ backgroundColor: typeofcolor }}>
            <div className="button-group">
                <button onClick={() => colorcode === "hex" ? handleColorClickHex() : handleColorClickrgb()}>Generate Random Color</button>
                <button onClick={() => setColorCode("rgb")}>Change Code Style(rgb)</button>
                <button onClick={() => setColorCode("hex")}>Change Code Style HEX</button>
            </div>

            <h1 className="code">{typeofcolor}</h1>
        </div>
    )
}

export default ColorPanel
