import { useState } from 'react';
import './Nav.css';
import React from 'react';
import Logo from '../images/logo.png';

function Nav(props) {
    // Declare new state variable for clicked menu (mobile)
    const [clicked, setClicked] = useState(false);

    const handleClick = (clicked) => {
        setClicked(clicked);
        props.setNavMenu(clicked);
    }

  return (
    <div className="nav">
        <div className='nav-content'>
            <img src={Logo} className="nav-logo" alt="Lords of Sol Logo" />
            {clicked ? <i className="fas fa-times fa-bars fa-lg" onClick={() => {handleClick(false)}}></i> : 
                    <i className="fas fa-bars fa-lg" onClick={() => {handleClick(true)}}></i> } 
            <ul className="nav-links">
                <li className="nav-link"><a href="#lore" className="nav-anchor">Lore</a></li>
                <li className="nav-link"><a href="#roadmap" className="nav-anchor">Roadmap</a></li>
                <li className="nav-link"><a href="#team" className="nav-anchor">Team</a></li>
                <li className="nav-link">
                    <a href="https://twitter.com/LordsofSOL" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter fa-lg nav-icon"></i>
                    </a>
                </li>
                <li className="nav-link">
                    <a href="https://discord.gg/Wu8bQckF" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-discord fa-lg nav-icon"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Nav;