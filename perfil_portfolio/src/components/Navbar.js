import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isOpen ? 'navbar-expanded' : ''}`}>
            {/* Botão de hambúrguer */}
            {/* Navbar para telas menores */}
            
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

      

      {/* Dropdown para telas menores */}
      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#aboutme" onClick={toggleMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
        <a href="https://wa.me/seu-numerodo-whatsapp" className="whatsapp-button">
          Chamar no WhatsApp
        </a>
      </div>

            {/* Dropdown - Links de navegação para telas menores */}
            {isOpen && (
                <section className="dropdown-menu">
                    <ul>
                        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                        <li><a href="#aboutme" onClick={toggleMenu}>About Me</a></li>
                        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </ul>
                    <a href="https://wa.me/seu-numerodo-whatsapp" className="whatsapp-button">Chamar no WhatsApp</a>
                </section>
            )}

            {/* Navbar completa para telas maiores */}
            <section className="navbar-header">
                <div className="navbar-image-container">
                    <img src="../perfil_iguana.jpg" alt="Logo" className="navbar-image" />
                    <div className="loader">
                        <svg viewBox="0 0 80 80">
                            <circle r="32" cy="40" cx="40"></circle>
                        </svg>
                    </div>
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
                <a href="https://wa.me/seu-numerodo-whatsapp" className="whatsapp-button">Chamar no WhatsApp</a>
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
