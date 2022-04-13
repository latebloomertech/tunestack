import React from 'react'

function TopArtistDetail({topArtist}) {



  return (
    <div className='card'>
        <img className='artist-image' src={topArtist.images[0].url} alt='artist image' />
        <p>{topArtist.name}</p>
    </div>
  )
}

export default TopArtistDetail