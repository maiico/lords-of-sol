import React from 'react';
import './Scroll.css';
import Scroll from '../../../../../images/scroll.png';
import ElfFlag from '../../../../../images/elf_flag.png';

function UndeadScroll(props) {

    const handleClick = (clicked, race) => {
        props.setClicked(clicked)
        props.setRace(race)
    }

    return ( 
        <div className="scroll">
            <img src={Scroll} className="scroll-img" alt="scroll"/>
            <div className="scroll-content">
                <img src={ElfFlag} className="scroll-flag" alt="elf flag" />
                <h1 className="scroll-heading">Dark Elves</h1>
                <p className="scroll-txt">
                    The Age of Ruin left many scars on the land of Esnen. 
                    The fields of Morgrae were barren wastelands where no crops would go, no livestock would graze, and not a soul would travel. 
                    In an act of desperation, the dark elf Flow sought out the Great Magi in the Isles of Dread to learn the dark arts.
                </p>
                <p className="scroll-txt">
                    Flow brought the power of Dark Magic back to the citizens of Morgrae and soon the land began to heal. 
                    With the power of the moon and stars, the Dark Elves channeled their energy into the land, healing the scars of battle. 
                    Soon, the land was bountiful once again as it was a millennia ago. For his efforts, Flow was crowned Lord of Morgrae and vowed that the dark elves would return to their rightful place as true rulers of Esnen.
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