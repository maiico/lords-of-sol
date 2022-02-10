import React from 'react';
import './Home.css';
import Hero from './components/hero/Hero';
import Lore from './components/lore/Lore';
import Roadmap from './components/roadmap/Roadmap';
import Team from './components/team/Team';

function Home() {
    return ( 
        <div className="home">
            <Hero />
            <Lore />
            <Roadmap />
            <Team />
        </div>
     );
}

export default Home;