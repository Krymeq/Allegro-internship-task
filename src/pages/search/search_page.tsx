import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '@material-ui/icons/Search';
import "./search_page.scss";

export const SearchPage = () => {
    const [username, setUsername] = useState<string>('');

    return (
        <div className="search-page-root">
            <div className="search-panel">
                <h1>Github
                    <span>
                        Searcher
                    </span>
                </h1>
                <input
                    value={username}
                    placeholder="Podaj nazwę użytkownika"
                    onChange={e => setUsername(e.target.value)}
                />
                <button disabled={username.length === 0}>
                    <Link to={`/repositories/${username}`}>
                        <Search /> Wyszukaj
                        </Link>
                </button>
            </div>
        </div>
    )
}