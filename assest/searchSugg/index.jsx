import React, { useEffect, useState } from 'react'
import SuggList from './sugget-list';

const Suggession = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [filtered, setFiltered] = useState([]);
    const [currvalue, setCurrValue] = useState('');
    const [DropDown, setDropDown] = useState(false);

    function handleClick(event) {
        setCurrValue(event.target.innerText);
        setDropDown(false);

    }
    async function fetchData() {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json()

        if (data.users && data.users.length) {
            setUser(data.users.map((userItem) => userItem.firstName));
            setLoading(false);
            setError(null);
        }
    }

    function handleSubmit(event) {
        const query = event.target.value.toLowerCase();
        setCurrValue(query)
        if (query.length > 1) {
            const filter = user.filter((Items) => Items.toLowerCase().indexOf(query) > -1);
            setFiltered(filter);
            setDropDown(true);
        }

    }
    useEffect(() => {
        fetchData();
    }, [])

    if (loading) {
        return <div>Loading Please Wait !!!</div>
    }
    if (error) {
        return <div>Error Occured !!!</div>
    }
    console.log(filtered);
    return (
        <div id="sugg-main-cointainer">
            <input value={currvalue} placeholder='Enter Here' onChange={handleSubmit} />
            {
                DropDown && <SuggList handleClick={handleClick} data={filtered} />
            }
        </div>
    )
}

export default Suggession