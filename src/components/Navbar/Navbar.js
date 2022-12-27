import React, { useState } from 'react';
import '../Navbar/Navbar.css';

import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose, AiOutlineHome, AiOutlinePhone } from 'react-icons/ai'
import { FaDumbbell } from 'react-icons/fa';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { CgProfile, CgInsertBefore } from 'react-icons/cg';
import { SiAboutdotme } from 'react-icons/si';
import { BiCommentMinus } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

import { Link } from 'react-scroll';

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='navbar' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2> <FaDumbbell />  POWERHOUSE</h2>
            </div>
            <ul className='nav-menu'>
                <Link to='home' smooth={true} duration={500}> <li> <AiOutlineHome />   Home</li></Link>
                <Link to='Whatweoffer' smooth={true} duration={500} ><li> <MdOutlineLocalOffer /> What we Offer</li></Link>
                <Link to='Ba' smooth={true} duration={500}> <li> <CgInsertBefore /> Results</li></Link>
                <Link to='About' smooth={true} duration={500}>  <li> <SiAboutdotme /> About Us</li></Link>
                <Link to='contact' smooth={true} duration={500}>   <li> <AiOutlinePhone /> Contact Us</li></Link>
            </ul>
            <div className='nav-icons'>
                <h2><CgProfile /></h2>
                <h2><BiCommentMinus /></h2>
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)} 
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className='mobile-nav'>
                    <Link to='home' smooth={true} duration={500}> <li> <AiOutlineHome />   Home</li></Link>
                    <Link to='Whatweoffer' smooth={true} duration={500} ><li> <MdOutlineLocalOffer /> What we Offer</li></Link>
                    <Link to='Ba' smooth={true} duration={500}> <li> <CgInsertBefore /> Results</li></Link>
                    <Link to='About' smooth={true} duration={500}>  <li> <SiAboutdotme /> About Us</li></Link>
                    <Link to='footer' smooth={true} duration={500}>   <li> <AiOutlinePhone /> Contact Us</li></Link>
                </ul>
                <div className='mobile-menu-bottom'>
                    <div className='menu-icons'>
                        <button>Search</button>
                        <button>Account</button>
                    </div>

                    <div className='social-icons'>
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar