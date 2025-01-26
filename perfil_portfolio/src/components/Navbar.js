import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        const sections = ['home', 'aboutme', 'projects', 'contact'].map(id => document.getElementById(id));
        if (sections.some(section => !section)) return; // Verifica se todos os elementos existem

        const scrollPosition = window.scrollY + window.innerHeight / 2; // Verifica a posição central da tela

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY; // Topo da seção na página
            const sectionBottom = sectionTop + rect.height;

            // Verifica se a seção está no meio da tela
            if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
                setActiveSection(section.id);
            }
        });
    };

    const handleClick = (e, section) => {
        e.preventDefault();  // Previne o comportamento padrão de navegação
        const element = document.getElementById(section);
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth', // Rolagem suave
        });
        setIsOpen(false); // Fecha o menu dropdown se estiver aberto
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                    <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => handleClick(e, 'home')}>Home</a></li>
                    <li><a href="#aboutme" className={activeSection === 'aboutme' ? 'active' : ''} onClick={(e) => handleClick(e, 'aboutme')}>About Me</a></li>
                    <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => handleClick(e, 'projects')}>Projects</a></li>
                    <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => handleClick(e, 'contact')}>Contact</a></li>
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
                    <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => handleClick(e, 'home')}>Home</a></li>
                    <li><a href="#aboutme" className={activeSection === 'aboutme' ? 'active' : ''} onClick={(e) => handleClick(e, 'aboutme')}>About Me</a></li>
                    <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => handleClick(e, 'projects')}>Projects</a></li>
                    <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => handleClick(e, 'contact')}>Contact</a></li>
                </ul>
            </section>

            <section className="navbar-whatsapp">
                <a href="https://wa.me/47984318419" className="whatsapp-button">Chamar no WhatsApp</a>
            </section>

            <section className="navbar-footer">
                <ul>
                    <li><a href="https://github.com/DevFullFelps"><i className="fab fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/felipe-adriano-967b89312/?jobid=1234"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/devfelps/"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=61564205696353"><i className="fab fa-facebook"></i></a></li>
                </ul>
            </section>
        </nav>
    );
};

export default Navbar;
