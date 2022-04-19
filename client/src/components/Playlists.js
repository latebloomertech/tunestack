import React, { useState, useEffect } from 'react'
import UserPlaylistDetail from './UserPlaylistDetail';



function Playlists({ accessToken }) {
    const [userPlaylists, setUserPlaylists] = useState([])

    useEffect(() => {
        async function fetchMyPlaylists() {
            let response = await fetch('https://api.spotify.com/v1/me/playlists', {
                method: 'GET',
                headers: {
                    'Accept': "application/json",
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
            })
            response = await response.json()
            console.log('USER PLAYLISTS', response)
            setUserPlaylists(response)
        }

        fetchMyPlaylists()

    }, [accessToken, setUserPlaylists])

    const playlists = userPlaylists.items
    // console.log('PLAYLIST ITEMS', playlists)


    return (
        <div className='content-block content-block-primary'>
            <h2>Your Spotify Playlists</h2>
            <ul>{playlists?.map(item =>
                <UserPlaylistDetail
                    key={item.id}
                    playlist={item}
                    accessToken={accessToken}/>)}</ul>
        </div>
    )
}

export default Playlists