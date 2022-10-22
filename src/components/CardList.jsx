import React from "react";

import Card from "./Card";
import places from '../data'

import './styles/CardList.css'

const CardList = () => {
  return (
    <section className="places--section">
      {
        places.map(place => 
          <Card 
            key = {place.id}
            {...place}
          />
        )
      }
    </section>
  )
}

export default CardList