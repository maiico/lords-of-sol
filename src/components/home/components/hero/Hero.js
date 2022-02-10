import React from 'react';
import './Hero.css';
import LordsGif from '../../../images/los_gif.gif';

function Hero() {
    return ( 
        <div className="hero">
            <div className="gif-wrapper">
                <img src={LordsGif} className="lords-gif" alt="lords of sol gif"/>
            </div>
            <div className="content-wrapper">
                <h1 className="hero-heading">Welcome to the Lords of Sol</h1>
                <h2 className="hero-subheading">A Solana NFT project fully built by the community. Stake your LoS NFT for $GLD and play in the LoS turned based game to take control over Ensen.</h2>
                <div className="buttons-wrapper">
                    <a href="https://magiceden.io/marketplace/lords_of_sol" target="_blank" rel="noopener noreferrer">
                        <button className="magic-eden-button">Buy on Magic Eden</button>
                    </a>
                    <a href="https://moonrank.app/collection/lords_of_sol" target="_blank" rel="noopener noreferrer">
                        <button className="moonrank-button">Rarity on MoonRank</button>
                    </a>
                </div>
            </div>
        </div>
     );
}

export default Hero;