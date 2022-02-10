import React from 'react';
import './Scroll.css';
import Scroll from '../../../../../images/scroll.png';
import OrcFlag from '../../../../../images/orc_flag.png';

function OrcScroll(props) {

    const handleClick = (clicked, race) => {
        props.setClicked(clicked)
        props.setRace(race)
    }

    return ( 
        <div className="scroll">
            <img src={Scroll} className="scroll-img" alt="scroll"/>
            <div className="scroll-content">
                <img src={OrcFlag} className="scroll-flag" alt="orc flag" />
                <h1 className="scroll-heading">Orcs</h1>
                <p className="scroll-txt">
                    The Orcs of Shoas have a history rife with brutality. 
                    Seen for their land rich in minerals and other fine resources, the other factions of Esnen sought to claim Shoas for their own. 
                    The orcs endured years of pillaging and destruction. As an young orcling, Skazi witnessed these awful events first hand. 
                    For years he trained under the great battlemasters, fine tuning his skills with the axe.
                </p>
                <p className="scroll-txt">
                    Years later and voted unanimously by his people, Skazi took up the crown and vowed to slice down any would-be invader to the swamplands of Shoas once and for all. 
                    The enemies of Shoas would feel the same suffering and pain that the Orcs themselves endured centuries prior. 
                    Shoas will stand strong, the rightful ruler of Esnen.
                </p>
                <div className="scroll-btn-wrapper">
                    <a href="https://magiceden.io/marketplace/lords_of_sol" target="_blank" rel="noopener noreferrer">
                        <button className="magic-eden-button-scroll">Buy on Magic Eden</button>
                    </a>
                        <button className="magic-eden-button-scroll" onClick={() => handleClick(false, "")}>Back to Ensen</button>
                </div>
            </div>
        </div>
     );
}

export default OrcScroll;