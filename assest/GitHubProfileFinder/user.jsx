import React from 'react'
import './style.css'
const User = ({ user }) => {
    const {
        avatar_url,
        followers,
        following,
        public_repos,
        name,
        login,
        created_at,
    } = user;

    const date = new Date(created_at);
    return (
        <div className="main">
            <div className="container">
                <div className="profile">
                    <img src={avatar_url} />
                    <a href={`https://github.com/${login}`} target="_blank">{name || login}</a>
                </div>
                <div className="data">
                    <p>Followers : {followers}</p>
                    <p>Following : {following}</p>
                    <p>Public Repo : {public_repos}</p>
                </div>
                <footer>
                    Created @ {date.toDateString()}
                </footer>
            </div>
        </div>

    )
}

export default User
