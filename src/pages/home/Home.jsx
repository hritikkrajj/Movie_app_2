import React from 'react'
import Herobanner from './heroBanner/Herobanner'
import Trending from './trending/Trending'
import './style.scss'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
function Home() {
  return (
    <div className='homepage'>
    <Herobanner/>
    <Trending/>
    <Popular/>
    <TopRated/>
    
    </div>
  )
}

export default Home