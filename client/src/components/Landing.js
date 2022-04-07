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
            <div className='splash'>Landing
                <h2>Welcome to TuneStack</h2>
                <p>description of tunestack...</p>
                <h2>Sign in to Spotify to get started:</h2>
                <button>Sign in to Spotify</button>
            </div>
            <div>
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
            </div>
        </>
    )
}

export default Landing