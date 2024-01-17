import React from 'react'
import Cover from "../../img/Cover.jpg"
import Profile from "../../img/Profile.jpg"
import './ProfileCard.css'

const ProfileCard = () => {

    const ProfilePage =true;
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>
        <div className="ProfileName">
            <span>Mehrad Mostajab</span>
            <span>Smart kindergarten boy</span>
        </div>
        <div className="followStatus">
            <hr/>
            <div>
                <div className="follow">
                    <span>7,376</span>
                    <span>Followings</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>1</span>
                    <span>Followers</span>
                </div>

                  {ProfilePage &&(

                    <>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>3</span>
                        <span>Posts</span>
                    </div>
                    </>
                  )}

            </div>
            <hr/>
        </div>
        {ProfilePage? '':
         <span>
         My Profile
        </span>
        }

       
    </div>
  )
}

export default ProfileCard