import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <nav className='navbar'>
                <NavLink className="navlink" to="/">Landing</NavLink>
                <NavLink className="navlink" to="/dashboard">Dashboard</NavLink>
                <NavLink className="navlink" to="/rules/grouping">Grouping</NavLink>
                <NavLink className="navlink" to="/rules/filtering">Filtering</NavLink>
                <NavLink className="navlink" to="/rules/songorder">Song Order</NavLink>
            </nav>
            <button className='button button-secondary'>Logout</button>
        </div>
    )
}

export default NavBar