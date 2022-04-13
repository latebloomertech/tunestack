import React, { useEffect, useState } from 'react';
import UserPlaylistDetail from './UserPlaylistDetail';
import UserSavedTracksDetail from './UserSavedTracksDetail';
import UserDetail from './UserDetail';
import { Link } from "react-router-dom"
import TopArtistCardContainer from './TopArtistCardContainer';


function Landing({ user, accessToken, isLoggedIn }) {
    const [spotifyUser, setSpotifyUser] = useState([])
    const [userPlaylists, setUserPlaylists] = useState([])
    const [userSavedTracks, setUserSavedTracks] = useState([])
    const [userTopArtists, setUserTopArtists] = useState([])    // console.log(accessToken)


    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch('https://api.spotify.com/v1/me', {
                method: 'GET',
                headers: {
                    'Accept': "application/json",
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
            })
            response = await response.json()
            // console.log(response)
            setSpotifyUser(response)
        }

        fetchMyAPI()

    }, [accessToken, setSpotifyUser])

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
            // console.log(response)
            setUserPlaylists(response)
        }

        fetchMyPlaylists()

    }, [accessToken, setUserPlaylists])

    const playlists = userPlaylists.items
    // console.log(playlists)
    const userProfilePicture = spotifyUser.images
    console.log(userProfilePicture)

    useEffect(() => {
        async function fetchMySavedTracks() {
            let response = await fetch('https://api.spotify.com/v1/me/tracks?limit=50', {
                method: 'GET',
                headers: {
                    'Accept': "application/json",
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
            })
            response = await response.json()
            console.log(response.items)
            setUserSavedTracks(response.items)
        }

        fetchMySavedTracks()

    }, [accessToken, setUserSavedTracks])


    useEffect(() => {
        async function fetchMyTopArtists() {
            let response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=12', {
                method: 'GET',
                headers: {
                    'Accept': "application/json",
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
            })
            response = await response.json()
            console.log(response)
            setUserTopArtists(response)
        }

        fetchMyTopArtists()

    }, [accessToken, setUserTopArtists])
    // const savedtracks = userSavedTracks.items
    // console.log(savedtracks)

    const topArtists = userTopArtists.items
    console.log(topArtists)
    return (

        <>
            {accessToken ? (
                <div>
                    <h2>Hello {spotifyUser.display_name}</h2>
                    <h3>Your Top Artists:</h3>
                    <TopArtistCardContainer topArtists={topArtists} />
                    <h3>You have good taste!</h3>
                    <h3>Ready to create new playlists from your saved songs?</h3>
                    <Link to={`/rules/grouping`} className='flow-previous-link'>
                        <button className='button button-primary flow-previous-button'>
                            Let's get Started!
                        </button>
                    </Link>
                    {/* <ul>{playlists?.map(item =>
                    <UserPlaylistDetail
                    key={item.id}
                playlist={item}/>)}</ul> */}
                    {/* <div>
            <ul>{savedtracks?.map(item =>
                    <UserSavedTracksDetail
                    key={item.track.id}
                    savedtracks={item}/>)}</ul>
            </div> */}
                </div>
            ) : (
                <div className='splash'>
                    <h2 className='fade-in-text'> Welcome to TuneStack</h2>

                    <div className='welcome-paragraph'>
                        <p>Connect to your Spotify account and organize your saved songs <br></br>in dynamic new ways.</p>

                        <p>TuneStack will organize your saved songs into playlists based on <br></br> your preferences.</p>

                        <p>After sigining in to Spotify, you will choose how to group, filter, and <br></br>order the songs on your newly created playlists!</p>
                    </div>

                    <h2 className='sign-in-prompt'>Sign in to Spotify to get started:</h2>

                    <a href="http://localhost:8888/">
                        <button className='buttons-general'>Sign in with Spotify</button>
                    </a>
                </div>)}
        </>
    )
}

export default Landing

// ******* THIS IS THE CODE THAT PROVIDED BASIC LOGIN TO SPOTIFY WITH ACCESS CODE ******

// const [username, setUsername] = useState("");
    // const [token, setToken] = useState("")

    // const CLIENT_ID = "ec952199a27d436b923a57c0c9e1ea7c"
    // const REDIRECT_URI = "http://localhost:4000/"
    // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    // const RESPONSE_TYPE = "code"
    // const SCOPE = 'user-read-private user-read-email'

    // const SIGN_IN_LINK =`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`


// ***********THIS IS THE FUNCTION TO BE ADDED BACK FOR LOGIN TO THE RAILS BACK END*****

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch("/login", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ username }),
    //     })
    //         .then((r) => r.json())
    //         .then((user) => console.log(user));
    // }


// ************THIS IS THE USER LOGIN FORM FOR LOCAL RAILS LOGIN***********

/* <div>
            <form onSubmit={handleSubmit}>
                <label className="login-labels" htmlFor="username">Username:  </label>
                <input className="input-form"
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />

                <button className="button-test" type="submit">Temp Login</button>
            </form>
        </div> */