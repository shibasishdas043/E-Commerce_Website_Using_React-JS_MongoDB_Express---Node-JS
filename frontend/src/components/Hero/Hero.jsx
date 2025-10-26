import React from 'react'
import "./Hero.css";
import hand_icon from "../assets/Frontend_Assets/hand_icon.png"

const Hero = () => {
  return (
      <div className='hero'>
          <div className="hero-left">
              <h2>New Arrivals Only</h2>
              <div>
                  <div className='hand-hand-icon'>
                      <p>new</p>
                      <img src={hand_icon} alt="" />
                  </div>
                  <p>collections</p>
                  <p>for everyone</p>
              </div>
          </div>
          <div className="hero-right">
              
          </div>
    </div>
  )
}

export default Hero