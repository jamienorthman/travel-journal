import React from 'react'
import './data.js'
import './style.css'
import {Header} from './components/Header.jsx'
import {Card} from './components/Card.jsx'


export default function App() {

  return (
    <div className="container">
      <Header />
      <div className="travel-log">
        <Card />
      </div>
    </div>
  )
}
