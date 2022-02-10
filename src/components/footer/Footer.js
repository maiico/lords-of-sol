import React from 'react';
import './Footer.css';
import SolanaLogo from '../images/solana_logo.png';

function Footer() {
    return ( 
        <div className="footer">
            <div className="built-on-wrapper">
                <p className="footer-txt">Built on</p>
                <img src={SolanaLogo} className="solana-logo" alt="solana logo"/>
            </div>
            <div className="footer-socials-wrapper">
                <a href="https://twitter.com/LordsofSOL" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter footer-icon"></i>
                </a>
                <a href="https://discord.gg/Wu8bQckF" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-discord footer-icon"></i>
                </a>
            </div>
        </div>
     );
}

export default Footer;