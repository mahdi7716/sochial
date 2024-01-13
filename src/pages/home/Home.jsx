import React from 'react'
import './Home.css'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'

function Home() {
  return (
    <div className='Home '>
    <ProfileSide/>
    <PostSide/>
    <div className='rightSide'>RightSide</div>

    
    </div>

 )
}

export default Home  