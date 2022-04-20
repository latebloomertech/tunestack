import React from 'react'
import { Link } from "react-router-dom"



function DeleteConfirmation({playlistToDelete, accessToken }) {

    console.log('PLAYLIST TO DELETE', playlistToDelete)

function handleDeleteClick() {
    fetch(`https://api.spotify.com/v1/playlists/${playlistToDelete.id}/followers`, {
        method: 'DELETE',
        headers: {
          'Accept': "application/json",
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      })
        .then((response) => console.log(response))
        // .then((data) => console.log('ADDED TRACK TO PLAYLIST', data))
}


    return (
        <div className='landing-and-confirmation-pages'>
            <h3>Are you sure you want to delete {playlistToDelete.name}?</h3>
            <Link to={`/delete/finalstep`}>
            <button className='button button-secondary' onClick={handleDeleteClick}>Yes, Delete Playlist</button>
            </Link>
            <br></br>
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

export default DeleteConfirmation