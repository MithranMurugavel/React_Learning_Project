import { useState } from 'react'
import ColorPanel from '../assest/ColorChangePannel'
import { buttons } from '../assest/config/buttons_data'
import './App.css'
import Accordian from '../assest/Accordian'
function App() {
  const [active,setActive] = useState(null)
  return (
     <div className="mainblock">
      {/* Button list */}
      <div style={{ display: "flex", gap: "10px" }} className="buttonblock">
        {buttons.map((btn) => (
          <button key={btn.id} onClick={() => setActive(btn.id)}>
            {btn.label}
          </button>
        ))}
      </div>

      {/* Show selected component */}
      <div style={{ marginTop: "20px" }}>
        {buttons.find((btn) => btn.id === active)?.component}
      </div>
    </div>
  )
}

export default App
