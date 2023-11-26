import React from 'react'
import data from './data.js'
import './style.css'
import {Header} from './components/Header.jsx'
import {Card} from './components/Card.jsx'


export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        img={item.imageUrl}
        title={item.title}
        location={item.location}
        googleMaps={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    )
  })


  return (
    <div className="container">
      <Header />
      <div className="travel-log">
        {cards}
      </div>
    </div>
  )
}
