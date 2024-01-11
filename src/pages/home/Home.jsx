import React from 'react'
import './Home.css'
import ProfileSide from '../../components/ProfileSide/ProfileSide'

function Home() {
  return (
    <div className='Home '>
    <ProfileSide/>
    <div className='postSide'>Posts</div>
    <div className='rightSide'>RightSide</div>

    
    </div>

 )
}

export default Home  