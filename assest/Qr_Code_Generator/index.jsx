import React, { useState } from 'react'
import {QRCode} from "react-qr-code";

const Qrcode = () => {

    const [input,setInput] = useState("");
    const [qrCode,setQrcode] = useState("");
    
    function handleGenerateQr(e){
        e.preventDefault();
        setQrcode(input);
        setInput("");
    }
    console.log(QRCode)
  return (

    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
      <div >
        <form onSubmit={handleGenerateQr} style={{ padding: "50px", display: "flex", gap: "10px" }}>
        <input onChange = {(ev)=>setInput(ev.target.value)} type = "text" placeholder="Enter the Input" value={input} style={{ width: "200px", flex: '10'}}/>
        <button type="submit" style ={{'border':'5px solid'}}>Generate</button>
        </form>
      </div>
      <QRCode value ={qrCode} size = {400}/>
    </div>
  )
}

export default Qrcode
