import React, { useEffect, useState } from 'react'
import './style.css'
const ScrollProgress = ({ url }) => {
    const [percentage, setPercentage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [data, setdata] = useState([]);
    const [errmessage, setErrMsg] = useState("");
    useEffect(() => {

        async function fetchData(url) {
            try {
                setLoading(true);
                const response = await fetch(url);
                const info = await response.json();

                if (info && info.products.length > 0)
                    setdata(info.products);
                setLoading(false);


            }
            catch (err) {
                setLoading(false);
                setErrMsg("Invalid URL");
            }
        }
        fetchData(url);

    }, [url])

     useEffect(()=>{
        window.addEventListener("scroll",handleScrollEvent);

        return() =>{
            window.removeEventListener("scroll",handleScrollEvent);
        };
        
    },[])

    if(errmessage){
        return <div>Opps !! Error Occured</div>
    }
    if (loading) {
        return <div>Loading data! Please wait</div>
    }

    
    function handleScrollEvent(){
        const val = document.documentElement.scrollTop;
        const val1 = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setPercentage((val/val1)*100);
    }
   
   return (
    <div>

        <div className="top">

            <div className="top-container">
                <h1 className="banner">Product List</h1>

                <div className="progress-bar">
                    <div
                        className="current-progress-bar"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>

        </div>

        <div className="listItems">

            {
                data && data.length > 0
                    ? data.map((dataItems) => (
                        <p key={dataItems.id}>
                            {dataItems.title}
                        </p>
                    ))
                    : null
            }

        </div>

    </div>
)
}

export default ScrollProgress
