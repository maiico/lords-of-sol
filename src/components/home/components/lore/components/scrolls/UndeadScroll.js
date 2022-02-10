import React from 'react';
import './Scroll.css';
import Scroll from '../../../../../images/scroll.png';
import UndeadFlag from '../../../../../images/undead_flag.png';

function UndeadScroll(props) {

    const handleClick = (clicked, race) => {
        props.setClicked(clicked)
        props.setRace(race)
    }

    return ( 
        <div className="scroll">
            <img src={Scroll} className="scroll-img" alt="scroll"/>
            <div className="scroll-content">
                <img src={UndeadFlag} className="scroll-flag" alt="undead flag" />
                <h1 className="scroll-heading">Undead</h1>
                <p className="scroll-txt">
                    The Undead have been prisoners to the Great Underkeeper for millennia, unable to think nor act on their own volition.
                    That was until the they were freed by the paladin Mondus Lightkeeper, a mistake he would soon regret. 
                </p>
                <p className="scroll-txt">
                    Now, the undead have set their eyes upon Ensen. 
                    With no chains or limitations to keep their souls prisoner, Lord Pooingcat has taken up the crown in order to spread the wrath of the undead to the farthest reaches of the land. 
                    Those who stand against the undead will surely fall in a wake of terror and death and those who follow will be rewarded. The undead shall be prisoners no more.
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

export default UndeadScroll;