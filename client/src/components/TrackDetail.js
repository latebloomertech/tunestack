import React from 'react'

function TrackDetail() {
    return (
        <div className='track-detail-container'>
            <img src='https://media.pitchfork.com/photos/5929ae46c0084474cd0c188c/1:1/w_320,c_limit/04192b63.jpg' className='track-image'/>
            <div className='track-data-field'>Track Name</div>
            <div className='track-data-field'>Track Artist</div>
            <div className='track-data-field'>Track Duration</div>
        </div>
    )
}

export default TrackDetail