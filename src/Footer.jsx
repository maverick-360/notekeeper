import React from 'react'

const Footer = (props) => {
    let year = new Date().getFullYear();
    return (
        <footer className="position-sticky text-center bg-white px-5">
            <p><a className="text-decoration-none" href="https://github.com/maverick-360">Soumavo Dey</a> || Copyright © {year} </p>
        </footer>
    )
}

export default Footer;
