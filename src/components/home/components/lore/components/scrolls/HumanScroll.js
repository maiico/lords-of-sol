import React from 'react';
import './Scroll.css';
import Scroll from '../../../../../images/scroll.png';
import HumanFlag from '../../../../../images/human_flag.png';

function HumanScroll(props) {

    const handleClick = (clicked, race) => {
        props.setClicked(clicked)
        props.setRace(race)
    }

    return ( 
        <div className="scroll">
            <img src={Scroll} className="scroll-img" alt="scroll"/>
            <div className="scroll-content">
                <img src={HumanFlag} className="scroll-flag" alt="human flag" />
                <h1 className="scroll-heading">Humans</h1>
                <p className="scroll-txt">
                The Humans have always resided in Gnuela, defending themselves against foreign threats who attempt to plunder the land for their gold and fine gemstones. 
                Growing up, the young Sebastian envied the soldiers going into battle every day; he longed to be able to protect his country from the mutant invaders.
                </p>
                <p className="scroll-txt">
                For years Sebastian sparred with swordsmen from across the land and his skills with the blade had earned him the title of Warlord. 
                Vowing to protect the citizens of Gnuela, he earned support from the people of his country. 
                Taking up the crown, the citizens of Gnuela would forever live by the three tenants: Honor, Truth, and Justice.
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

export default HumanScroll;