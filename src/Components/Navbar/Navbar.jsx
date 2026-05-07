import React, { useState, useEffect } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/ytlogo.jpg'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'

function Navbar({ setSidebar }) {
    const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <nav className='nav flex-div'>
            <div className='nav-left flex-div'>
                <img className='menu-icon invert-on-dark' onClick={() => setSidebar(prev => prev === false ? true : false)} src={menu_icon} alt="" />
                <Link to='/'><img className='logo' src={logo} alt="" /></Link>
            </div>
            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder='search' />
                    <img className='invert-on-dark' src={search_icon} alt="" />
                </div>
            </div>
            <div className='nav-right flex-div '>
                <button onClick={toggleTheme} className='theme-toggle-btn'>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
                <img className='invert-on-dark' src={upload_icon} alt="" />
                <img className='invert-on-dark' src={more_icon} alt="" />
                <img className='invert-on-dark' src={notification_icon} alt="" />
                <img className='user-icon' src={profile_icon} alt="" />
            </div>
        </nav>
    )
}

export default Navbar