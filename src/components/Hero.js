import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
      <div id="heroContainer">
        <div id='heroBg'>
          <video id="heroVid" src="/videos/video.mp4" autoPlay loop muted />
        </div>
        <h1 id="title">EXPERIANCE GORMET COOKING</h1>
      </div>
  )
}

export default Hero
