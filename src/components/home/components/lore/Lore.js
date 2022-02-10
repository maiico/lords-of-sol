import React, { useState } from 'react';
import './Lore.css';
import Map from '../../../images/map.png';
import OrcCastle from '../../../images/orc_castle.png';
import HumanCastle from '../../../images/human_castle.png';
import UndeadCastle from '../../../images/undead_castle.png';
import ElfCastle from '../../../images/elf_castle.png';
import Backdrop from './components/backdrop/Backdrop';
import HumanScroll from './components/scrolls/HumanScroll';
import OrcScroll from './components/scrolls/OrcScroll';
import UndeadScroll from './components/scrolls/UndeadScroll';
import ElfScroll from './components/scrolls/ElfScroll';

function Lore() {

    // component state for lightbox effect

    const [clicked, setClicked] = useState(false)
    const [race, setRace ] = useState("")

    const handleClick = (clicked, race) => {
        setClicked(clicked)
        setRace(race)
    }

    return ( 
        <div id="lore" className="lore">
            {clicked ? <Backdrop /> : null}
            {race === "human" ? <HumanScroll setClicked={setClicked} setRace={setRace}/>: null }
            {race === "orc" ? <OrcScroll setClicked={setClicked} setRace={setRace}/>: null }
            {race === "undead" ? <UndeadScroll setClicked={setClicked} setRace={setRace}/>: null }
            {race === "elf" ? <ElfScroll setClicked={setClicked} setRace={setRace}/>: null }
            <div className="lore-heading-container">
                <h1 className="lore-heading">Lore</h1>
                <p className="lore-txt">Four factions battle over control of Esnen, which one will you choose?</p>
                <div className="map-container">
                    <img src={Map} className="map-img" alt="map of Ensen" />
                    <img src={HumanCastle} className="human-castle" alt="human castle" onClick={() => handleClick(true, "human")} />
                    <img src={OrcCastle} className="orc-castle" alt="orc castle" onClick={() => handleClick(true, "orc")} />
                    <img src={UndeadCastle} className="undead-castle" alt="undead castle" onClick={() => handleClick(true, "undead")} />
                    <img src={ElfCastle} className="elf-castle" alt="elf castle"  onClick={() => handleClick(true, "elf")}/>
                </div>
            </div>
        </div>
     );
}

export default Lore;