import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div id="heroContainer">
        <div id='heroBg'>
          <video id="heroVid" src="./videos/video.mp4" autoPlay loop muted />
        </div>
        <h1 id="title">EXPERIENCE GORMET CUISINE</h1>
        <div id="mainText">
        <p id="contactInfo">
          100 10th Street
          <hr id="line"/>
          San Francisco CA 12345
          <hr id="line"/>
          (555) 555-5555
        </p>
        </div>
        
      </div>
      <div className="underline" id="hero-underline" ></div>
    </div>
  )
}

export default Hero
