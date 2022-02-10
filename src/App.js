import './App.css';
import { useState } from 'react';
import Nav from './components/nav/Nav';
import NavMenuMobile from './components/NavMenuMobile/NavMenuMobile';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {

    // state for nav menu mobile component
    const [ navMenu, setNavMenu ] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
          <Nav setNavMenu={setNavMenu}/>
          <NavMenuMobile navMenuOpen={navMenu} />
          <Home />
          <Footer />
      </header>
    </div>
  );
}

export default App;
