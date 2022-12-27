import React from 'react';
import '../About/About.css';
import aimg from '../../assets/aimg.jpg';


const About = () => {
    return (
        <div name='About' className='about'>
            <div className='a-text'>
                <h1>ABOUT OUR FIT FAMILY</h1>
                <p>A gymnasium, also known as a gym, is an indoor location for
                    athletics. The word is derived from the ancient Greek term "gymnasium".
                    They are commonly found in athletic and fitness centres, and as activity
                    and learning spaces in educational institutions.</p>
                    
                    </div>
            <div className='a-img'>
                <img src={aimg} alt='/' className='A1'/>
            </div>
        </div>
    )
}

export default About