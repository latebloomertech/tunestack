import React from 'react'
import NavBar from "./NavBar"


function Header() {
    return (
        <div className="header">
            <div className='header-logo'>
                <h2>tuneStack</h2>
            </div>
            <div className='header-navbar'>
            <NavBar />
            </div>
        </div>
    )
}

export default Header