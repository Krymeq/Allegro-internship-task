import { Search } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.scss";

export const Navbar = () => {
    const [username, setUsername] = useState("");

    return (
        <div className="navbar-root">
            <Link to="/search">
                <div className="header-widescreen">
                    Github<span>Searcher</span>
                </div>

                <div className="header-smallscreen">
                    G<span>S</span>
                </div>
            </Link>

            <input
                value={username}
                placeholder="Znajdź innego użytkownika"
                onChange={e => setUsername(e.target.value)}
            />

            <button disabled={username.length === 0}>
                <Link to={`/repositories/${username}`}>
                    <Search />
                </Link>
            </button>
        </div>);
}