import React from 'react'
import TopArtistDetail from './TopArtistDetail'

function TopArtistCardContainer({topArtists}) {
  return (

    <div className='card-container'>
       {topArtists?.map(item =>
        <TopArtistDetail
        key={item.id}
        topArtist={item} />)}
    </div>
  )
}

export default TopArtistCardContainer