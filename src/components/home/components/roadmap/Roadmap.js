import React from 'react';
import './Roadmap.css';
import RoadmapImg from '../../../images/roadmap.png';

function Roadmap() {
    return ( 
        <div id="roadmap" className="roadmap">
            <h1 className="roadmap-heading">Roadmap</h1>
            <img src={RoadmapImg} className="roadmap-img" alt="Lords of Sol Roadmap" />
        </div>
     );
}

export default Roadmap;