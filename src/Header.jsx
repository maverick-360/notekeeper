import React, { useState } from 'react';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

const Header = (props) => {
    const [SearchTerm, setSearchTerm] = useState("");

    const searchEvent = (event) => {
        setSearchTerm(event.target.value);
    }
    const addSearch = (e) => {
        e.preventDefault();
        props.searchIt(SearchTerm);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <CollectionsBookmarkIcon />
                    <a className="navbar-brand" href="#">Keeper</a>
                    <form className="d-flex ms-auto shadow-none">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search by Title"
                            value={SearchTerm}
                            onChange={searchEvent} />
                        <button className="btn btn-outline-warning" onClick={addSearch}>Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header
