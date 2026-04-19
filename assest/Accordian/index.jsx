import React, { useEffect, useState } from 'react'
import {data} from './data'
import "./style.css"
const Accordian = () => {
    const [select,setSelected] = useState(null);
    const [enable,setenable] = useState(false);
    const [multiple,setmultiple] = useState([]);
    function handleSingleSelection(getId){
        setSelected(getId === select ? null : getId)
    }
    function handleMultiSelection(getId){
        let cpymulti = [...multiple];
        const findindex = cpymulti.indexOf(getId);

        if(findindex === -1){
            cpymulti.push(getId);
        }
        else{
            cpymulti.splice(findindex,1);
        }
        setmultiple(cpymulti);
    }
    useEffect(()=>{
            setSelected(null);
            setmultiple([]);
    },[enable])
  return (

    <div className = "main">
        <button onClick={()=>setenable(!enable)} className={!enable ? "btn":"btn  btn-active"}>{enable ? "Multi-select OFF":"Multi-select ON"}</button>
        <div className = "accordian">
            {
            data && data.length > 0 ? 
            (data.map(items => <div onClick = {enable ? ()=> handleMultiSelection(items.id):() =>handleSingleSelection(items.id)} className="content" key={items.id}>
                <div className="list-items">
                <h2>{items.question}</h2>
                <span>+</span>
            </div>
            {
               enable ? multiple.indexOf(items.id) != -1 && (<div>{items.answer}</div>):select === items.id &&(<div className="ans">{items.answer}</div>)
            }
            </div>
        )):
            <div> No data Found</div>
        }
        </div>
        
      
    </div>
  )
}

export default Accordian;
