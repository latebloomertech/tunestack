import React from 'react'
import { Link } from "react-router-dom"




function Logout({setAccessToken}) {

    function handlePageRefresh () {
        setAccessToken(null)
    }

    return (
        <div>
            <h3>You Successfully Logged Out</h3>
            <Link to={`/`}>
                <button onClick={handlePageRefresh} className='button button-secondary'>Return to Landing Page</button>
            </Link>
        </div>
    )
}

export default Logout