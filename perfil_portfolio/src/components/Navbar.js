import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isOpen ? 'navbar-expanded' : ''}`}>
            <div className="hamburger-container">
                <div className="hamburger" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="navbar-name-small">Felipe Adriano</div>
            </div>

            <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                <div className="navbar-name-small">Felipe Adriano</div>
                <ul>
                    <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#aboutme" onClick={toggleMenu}>About Me</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
                <a href="https://wa.me/47984318419" className="whatsapp-button">Chamar no WhatsApp</a>
            </div>

            <section className="navbar-header">
                <div className="navbar-image-container">
                    <img src="../perfil_iguana.jpg" alt="Logo" className="navbar-image" />
                </div>
                <div className="navbar-name">Felipe Adriano</div>
            </section>

            <section className="navbar-link">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#aboutme">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </section>

            <section className="navbar-whatsapp">
                <a href="https://wa.me/47984318419" className="whatsapp-button">Chamar no WhatsApp</a>
            </section>

            <section className="navbar-footer">
                <ul>
                    <li><a href="https://github.com/seu-perfil"><i className="fab fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/seu-perfil"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/seu-perfil"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com/seu-perfil"><i className="fab fa-twitter"></i></a></li>
                </ul>
            </section>
        </nav>
    );
};

export default Navbar;
