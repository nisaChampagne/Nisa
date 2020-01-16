import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nisa from './nisa.jpg'


import './navbar.scss';

const DesktopNav = () => (
  <div className="subNav">
    <div className="subNav__menu">
        <li><NavLink to="/" exact className="subNav__link">Home</NavLink> </li>
        <li><NavLink to="/about" exact className="subNav__link">About</NavLink> </li>
        <li><NavLink to="/contact" exact className="subNav__link" >Contact</NavLink> </li>
        <li><NavLink to="/projects" exact className="subNav__link">Projects</NavLink></li>
        <li><NavLink to="/magic8ball" exact className="subNav__link">Magic8Ball</NavLink></li>

    </div>
  </div>
)

const DesktopDropdown = ({ open, setOpen }) => {
  return (
    <div className={`nav__DesktopDropdown${open ? " open" : ""}`}>
      <ul>
        <li><NavLink to="/" exact className="subNav__link"  onClick={() => setOpen(false)}>Home</NavLink> </li>
        <li><NavLink to="/about" exact className="subNav__link"  onClick={() => setOpen(false)}>About</NavLink> </li>
        <li><NavLink to="/contact" exact className="subNav__link"  onClick={() => setOpen(false)}>Contact</NavLink> </li>
        <li><NavLink to="/projects" exact className="subNav__link" onClick={() => setOpen(false)}>Projects</NavLink></li>
        <li><NavLink to="/resume" exact className="subNav__link" onClick={() => setOpen(false)}>Resume</NavLink></li>
        <li><NavLink to="/drum" exact className="subNav__link" onClick={() => setOpen(false)}>Drum Kit</NavLink></li>
      </ul>
    </div>
  )
}

const MobileDropdown = ({ open, setOpen }) => {
  return (
    <div className={`nav__mobile-dropdown${open ? " open" : ""}`}>
      <ul>
        <li><NavLink to="/" exact className="subNav__link"  onClick={() => setOpen(false)}>Home</NavLink> </li>
        <li><NavLink to="/about" exact className="subNav__link"  onClick={() => setOpen(false)}>About</NavLink> </li>
        <li><NavLink to="/contact" exact className="subNav__link"  onClick={() => setOpen(false)}>Contact</NavLink> </li>
        <li><NavLink to="/projects" exact className="subNav__link" onClick={() => setOpen(false)}>Projects</NavLink></li>
        <li><NavLink to="/magic8ball" exact className="subNav__link"  onClick={() => setOpen(false)}>Magic8Ball</NavLink></li>
        <li><NavLink to="/drum" exact className="subNav__link" onClick={() => setOpen(false)}>Drum Kit</NavLink></li>
      </ul>
    </div>
  )
}

const NavBar = () => {
  const [open, setOpen] = React.useState(false); // Used for displaying and hiding the dropdown

  return (
    <>
      <nav className="nav">
        <Link to="/" onClick={() => setOpen(false)}><img src={Nisa} style ={{width: "40px", height:"40px"}} alt="Nisa" className="nav__logo" /></Link>
        <div className="nav__mobile-menu">

        </div>
        <div className={`nav__menu${open ? " open" : " closed"}`}>

              <>
                {<DesktopNav/>}
                <img className="nav_dropdownIconOpen" src='/arrow-down.svg' alt="dropdown open" onClick={() => setOpen(true)} />
                <img className="nav_dropdownIconClose" src='/close-button.svg' alt="dropdown close" onClick={() => setOpen(false)} />
                <img className="nav__mobile-menu-btn" src='/Menu-button.svg' alt="mobile menu" width="32" onClick={() => setOpen(!open)} />
                <DesktopDropdown open={open}/>
              </>
        </div>
      </nav>
      <MobileDropdown open={open} setOpen={setOpen} />
    </>
  );
};

export default NavBar;