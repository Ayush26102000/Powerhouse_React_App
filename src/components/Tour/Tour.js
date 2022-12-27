
import React from 'react';
import '../Tour/tour.css';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import c3 from '../../assets/c3.jpg';

function Tour() {
    return (
        <div name='tour' className='t-bg'>
            <div name='carousel' className='container'>
                <h1>Gym Tour</h1>
                
                <Carousel className='carousel' showArrows={true} autoPlay={false} infiniteLoop={true} >
                    <div>
                        <img src={c1} alt='/' />
                    </div>
                    <div>
                        <img src={c2} alt='/' />
                    </div>
                    <div>
                        <img src={c3} alt='/' />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Tour