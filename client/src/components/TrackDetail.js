import React from 'react'

function TrackDetail({name, artist_name, duration, image}) {

console.log('anything')

    return (
        <div className='track-detail-container'>
            <img src={image}
            className='track-image'/>
            <div className='track-data-field'>{name}</div>
            <div className='track-data-field'>{artist_name}</div>
            <div className='track-data-field'>{duration}</div>
        </div>
    )
}

export default TrackDetail

// 'https://media.pitchfork.com/photos/5929ae46c0084474cd0c188c/1:1/w_320,c_limit/04192b63.jpg'