import React from 'react';
import '../Hero/Hero.css';
import Video from '../../assets/back2.mp4';

const Hero = () => {
  return (
    <div name='home' className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={Video} type='video/mp4' />
      </video>
      <div className='overlay'>
        <div className='content'>
          <h1>BE YOUR BEST</h1>
          <div>
            <button className='h-btn'>JOIN TODAY</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero