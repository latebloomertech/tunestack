import React, { useState } from 'react';

function Landing({ user }) {
    const [username, setUsername] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
        })
            .then((r) => r.json())
            .then((user) => console.log(user));
    }

    return (
        <>
            <div className='splash'>
                <h2 className='fade-in-text'> Welcome to TuneStack</h2>

                <div className='welcome-paragraph'>
                <p>Connect to your Spotify account and organize your saved songs <br></br>in dynamic new ways.</p>

                <p>TuneStack will organize your saved songs into playlists based on <br></br> your preferences.</p>

                <p>After sigining in to Spotify, you will choose how to group, filter, and <br></br>order the songs on your newly created playlists!</p>
                </div>

                <h2 className='sign-in-prompt'>Sign in to Spotify to get started:</h2>

                <button className='buttons-general'>Sign in to Spotify</button>
            </div>
            {/* <div>
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
            </div> */}
        </>
    )
}

export default Landing