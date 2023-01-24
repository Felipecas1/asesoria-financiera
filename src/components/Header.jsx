import React from 'react';
import About from '../containers/About';
import menu from '../assets/icons/icon_menu.svg';
import logo from '../assets/logos/logo.jpg';
import '../styles/Header.css';

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={menu} alt="menu" className="menu-icon" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="logo-page" href="/"/>
            </div>
            <div className="navbar-right">
                <ul>
                    <a href="/">Inicio</a>
                    <a href="/services">Servicios</a>
                    <a href="/testimonios">Testimonios</a>
                    <a href='/forms'>Contáctame</a>
                </ul>
            </div>
        </nav>
    );
}

export default Header;