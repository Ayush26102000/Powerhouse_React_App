import React from 'react';
import '../What we offer/Whatweoffer.css';

import img6 from '../../assets/img6.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';

function Whatweoffer() {
    return (
        <div name='Whatweoffer' className='Whatweoffer'>
            <div className="container">
                <h1>What We Offer</h1>
                <p>The joy of Right Health</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={img2} alt="/"/>
                    <img src={img6} alt="/"/>
                    <img src={img3} alt="/"/>
                    <img src={img4} alt="/"/>
                    <img src={img5} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Whatweoffer