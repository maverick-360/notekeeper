import React from 'react'

const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <div className="position-absolute bottom-0 start-50">
            <p>Soumavo Dey || Copyright © {year} </p>
        </div>
    )
}

export default Footer;
