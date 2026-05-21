import React, { useEffect, useState } from 'react'
import User from './user';
import './style.css'
const GitFinder = () => {

    const [name, setName] = useState("github");
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState("");
    async function fetchProfileData(user) {
        setLoading(true);
        setError("");
        const data = await fetch(user);

        const jsdata = await data.json();

        if (jsdata) {
            setUserData(jsdata);
            setLoading(false);
            setName("");
        }
        if (data.status === 404) {
            setError("UserName Not Found 🧐🫣");
            setLoading(false);
            return;
        }
    }


    function handlesubmit() {
        event.preventDefault();
        fetchProfileData(`https://api.github.com/users/${name}`);
    }
    useEffect(() => {
        console.log(userData);
    }, [userData]);
    if (loading) {
        return <div style={{ 'display': 'flex', 'alignItems': 'center', justifyContent: 'center' }}>Loading please wait!!!</div>
    }
    if(error){
        return <div style={{ 'display': 'flex', 'alignItems': 'center', justifyContent: 'center' }}>{error}</div>
    }

    return (
        <div className="main">
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder='Enter the User Name' value={name} onChange={(event) => setName(event.target.value)} />
                <button onClick={handlesubmit}>Search</button>
            </form>
            <div>
                
                {
                    userData != null ? <User user={userData} /> : null
                }
            </div>

        </div>
    )
}

export default GitFinder
