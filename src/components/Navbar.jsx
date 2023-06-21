import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Navbar = ({ text }) => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">CoralMango</div>
                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                    <div className="menu">
                        {text === 'Contact' ?
                            <li><Link to="/">Home</Link></li> : <li><Link to="/home">Home</Link></li>}
                        {text === 'Contact' ?
                            <li><Link to="/">About</Link></li> : <li><Link to="/home">About</Link></li>}
                        {text === 'Contact' ?
                            <li className="settings"><Link to="/">Settings</Link></li> : <li className="settings"><Link to="/home">Settings</Link></li>}
                        <li><Link to="/">{text}</Link></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}
