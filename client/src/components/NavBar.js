import React from 'react'
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"


function NavBar({handleLogout}) {
    return (
        <div>
            <nav className='navbar'>
                <NavLink className="navlink" to="/">Landing</NavLink>
                <NavLink className="navlink" to="/dashboard">Dashboard</NavLink>
                <NavLink className="navlink" to="/rules/grouping">Grouping</NavLink>
                <NavLink className="navlink" to="/rules/filtering">Filtering</NavLink>
                <NavLink className="navlink" to="/rules/songorder">Song Order</NavLink>
            </nav>
            <Link to={`/logout`}>
            <button onClick={handleLogout} className='button button-secondary'>Logout</button>
            </Link>
        </div>
    )
}

export default NavBar