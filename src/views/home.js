import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Check-in</title>
        <meta property="og:title" content="Check-in" />
      </Helmet>
      <input
        type="text"
        autoFocus
        placeholder="buscar"
        className="input home-textinput"
      />
      <button className="button home-button">Button</button>
    </div>
  )
}

export default Home
