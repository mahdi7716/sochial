import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
const InfoCard = () => {
  return (
    <div className="InfoCard">
        <div className="InfoHead">
            <h4>Your Info</h4>
            <div>
            <UilPen width='2rem' height='1.2rem'/>
            </div>
           
        </div>
        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>In kindergarten</span>
        </div>
        <div className="info">
            <span>
                <b>Lives </b>
            </span>
            <span>Mashhad</span>
        </div>
        <div className="info">
            <span>
                <b>kindergarten </b>
            </span>
            <span>Kamyab,St-Kardasti</span>
        </div>

        <button className="button logout-button">LogOut</button>



    </div>
  )
}

export default InfoCard