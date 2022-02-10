import React from 'react';
import './Team.css';
import TruccosAvatar from '../../../images/truccos.jpg';
import ShaheenAvatar from '../../../images/shaheen_avatar.png';
import SteejoAvatar from '../../../images/steejo_avatar.png';
import HumanLordAvatar from '../../../images/human_lord.png';
import UndeadLordAvatar from '../../../images/undead_lord.png';
import OrcLordAvatar from '../../../images/orc_lord.png';
import ElfLordAvatar from '../../../images/elf_lord.png';

function Team() {
    return ( 
        <div id="team" className="team">
            <div className="team-heading-wrapper">
                <h1 className="team-heading">Team</h1>
                <p className="team-txt">
                    Lords of Sol is unique in that it started as a social experiment. 
                    The collection centers around four factions: Orcs, Dark Elves, Undead, and Humans. 
                    The minters of each of the four 1/1 Lord NFTs from their respective faction are given the responsibility of owning the project and 25% of the royalties. 
                    These 1/1 NFTs were then burned upon acceptance of those terms.
                </p>
            </div>
            <h2 className="team-heading">Lords of Sol</h2>
            <div className="lords-team">
                <div className="team-card">
                    <img src={HumanLordAvatar} className="team-avatar" alt="Human Lord avatar"/>
                    <h2 className="team-member-name">s3bastian</h2>
                    <p className="team-member-job">Human Lord</p>
                    <a href="https://twitter.com/s3bastiantorres" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter team-twitter-icon"></i>
                    </a>
                </div>
                <div className="team-card">
                    <img src={UndeadLordAvatar} className="team-avatar" alt="Undead Lord avatar"/>
                    <h2 className="team-member-name">Pooingcat</h2>
                    <p className="team-member-job">Undead Lord</p>
                    <a href="https://twitter.com/pooingcat" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter team-twitter-icon"></i>
                    </a>
                </div>
                <div className="team-card">
                    <img src={OrcLordAvatar} className="team-avatar" alt="Orc Lord avatar"/>
                    <h2 className="team-member-name">Skazi</h2>
                    <p className="team-member-job">Orc Lord</p>
                    <a href="https://twitter.com/LoS_Orc" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter team-twitter-icon"></i>
                    </a>
                </div>
                <div className="team-card">
                    <img src={ElfLordAvatar} className="team-avatar" alt="Elf Lord avatar"/>
                    <h2 className="team-member-name">FlowGoCrazy</h2>
                    <p className="team-member-job">Dark Elf Lord</p>
                    <a href="https://twitter.com/LoS_DarkElf" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter team-twitter-icon"></i>
                    </a>
                </div>
            </div>
            <h2 className="team-heading">Dev Team</h2>
            <div className="lords-team">
                <div className="team-card">
                    <img src={SteejoAvatar} className="team-avatar" alt="Human Lord avatar"/>
                    <h2 className="team-member-name">Steejo</h2>
                    <p className="team-member-job">Master of Games</p>
                    <a href="https://twitter.com/LordsofSOL" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter team-twitter-icon"></i>
                    </a>
                </div>
                <div className="team-card">
                    <img src={TruccosAvatar} className="team-avatar" alt="Undead Lord avatar"/>
                    <h2 className="team-member-name">Truccos</h2>
                    <p className="team-member-job">Dev</p>
                    <a href="https://twitter.com/TruccosHQ" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter team-twitter-icon"></i>
                    </a>
                </div>
                <div className="team-card">
                    <img src={ShaheenAvatar} className="team-avatar" alt="Orc Lord avatar"/>
                    <h2 className="team-member-name">ShaheenG</h2>
                    <p className="team-member-job">Dev</p>
                    <a href="https://twitter.com/LordsofSOL" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter team-twitter-icon"></i>
                    </a>
                </div>
            </div>
        </div>
     );
}

export default Team;