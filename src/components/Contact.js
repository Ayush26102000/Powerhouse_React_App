import React from 'react';
import '../components/Contact.css';
import {BsTelephoneInboundFill} from 'react-icons/bs';

const Contact = () => {
    return (
        <div name='contact' className='contact' >
            <h1><BsTelephoneInboundFill/> Contact Us</h1>
            <form>
                <label>Name</label>
                <input type="text" placeholder='Enter Your Name' />
                <label>Email Id</label>
                <input type="email" placeholder='Enter Your Email Id' />
                <label>Phone Number</label>
                <input type="text" placeholder='Enter Your Phone No' />
                <label>Your Message</label>
                <textarea type="text" placeholder='Your Message' />
                <button className='c-btn'>Message Us</button>
            </form>
            {/* <button className='c-btn'>Message Us</button> */}
        </div>
    )
}

export default Contact