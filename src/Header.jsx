import React from 'react';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <CollectionsBookmarkIcon />
                    <a className="navbar-brand" href="#">Keeper</a>
                </div>
            </nav>
        </>
    )
}

export default Header
