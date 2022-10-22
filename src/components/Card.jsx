import React from "react";

import './styles/Card.css'

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img className="place--image" src={props.photo} alt="place image" />
        <div className="card-resume">
          <div className="card--info">
            <div className="place--location"> 
              <img className="place--icon_location" src="../assets/location-icon-blue.png" alt="icon location" />
              {props.location} 
              <a className="place--map" href={props.map} target='_blank'>view on google maps</a>
            </div>
            <div className="place--title"><a className="place--wiki" href={props.wiki} target='_blank' >{props.title}</a></div>
          </div>
          <div className="card--about">
            <div className="place--date">{props.date}</div>
            <div className="place--description">{props.description}</div>
          </div>
        </div>
      </div>
      <hr />
    </>
    
  )
}

export default Card