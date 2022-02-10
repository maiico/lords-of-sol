import './NavMenuMobile.css';
import React from 'react';

function NavMenuMobile(props) {

    //set class for open or close mobile nav menu

    let navMenuClass =  "nav-menu-mobile"

    if(props.navMenuOpen) {
        navMenuClass =  "nav-menu-mobile-open" 
    }

  return (
    <div className={navMenuClass}>
        <ul className="nav-links-mobile">
            <li className="nav-link-mobile">
            <a href="#lore" className="nav-link-mobile">
                <i className="fas fa-book"></i>
                <p className="nav-link-mobile-txt">Lore</p>
            </a>
            </li>
            <li className="nav-link-mobile">
            <a href="#roadmap" className="nav-link-mobile">
                <i className="fas fa-road"></i>
                <p className="nav-link-mobile-txt">Roadmap</p>
            </a>
            </li>
            <li className="nav-link-mobile">
            <a href="#team" className="nav-link-mobile">
                <i className="fas fa-users"></i>
                <p className="nav-link-mobile-txt">Team</p>
            </a>
            </li>
            <li className="nav-link-mobile">
                <i className="fab fa-discord"></i>
                <p className="nav-link-mobile-txt">Discord</p>
            </li>
            <li className="nav-link-mobile">
                <i className="fab fa-twitter"></i>
                <p className="nav-link-mobile-txt">Twitter</p>
            </li>
        </ul>
    </div>
  );
}

export default NavMenuMobile;