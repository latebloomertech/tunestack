import React from 'react'
import { Link } from "react-router-dom"



function DeleteFinalStep() {
    return (
        <div className='landing-and-confirmation-pages'>
            <h3>OK! Playlist Delted</h3>
            <Link to={`/playlists`}>
                <button className='button button-secondary'>Show My Spotify Playlists</button>
            </Link>
            <br></br>
            <Link to={`/dashboard`}>
                <button className='button button-secondary'>Return to Dashboard</button>
            </Link>
        </div>
    )
}
export default DeleteFinalStep