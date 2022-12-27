import React, {useState} from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import '../components/Navbar.css';
import { AiOutlineClose } from 'react-icons/ai'
import {FaDumbbell} from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

function Navbar ()  {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2> <FaDumbbell className='duumbbell'/> POWERHOUSE</h2>
            </div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>What we Offer</li>
                <li>Results</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <div className='nav-icons'>
                <h2>Add Something</h2>
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className='mobile-nav'>
                    <li>Home</li>
                    <li>What we Offer</li>
                    <li>Results</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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