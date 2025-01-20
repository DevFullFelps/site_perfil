import React from 'react';
import './Navbar.css';

const Navbar = () =>{
    return(
        <nav className='navbar'>
            {/* Seção da imagem e nome */}
            <section className='navbar-header'> 
                <img src='../perfil_iguana.jpg' alt='Logo' className='navbar-image'/>
                <div className='navbar-name'>Felipe Adriano</div>
            </section>
            
            {/* Links de navegação */}
            <section className='navbar-link'>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#aboutme'>About Me</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </section>
            {/* Botão de Whatsapp */}
            <section className='navbar-whatsapp'>
                <a href='https://wa.me/seu-numerodo-whatsapp' className='whatsapp-button'>Chamar no WhatsApp</a>
            </section>
            
            {/* Seção das Logos */}
            <section className='navbar-footer'>
                <ul>
                <li><a href="https://github.com/seu-perfil"><i className="fab fa-github"></i> </a></li>
        <li><a href="https://www.linkedin.com/in/seu-perfil"><i className="fab fa-linkedin"></i> </a></li>
        <li><a href="https://www.instagram.com/seu-perfil"><i className="fab fa-instagram"></i> </a></li>
        <li><a href="https://twitter.com/seu-perfil"><i className="fab fa-twitter"></i></a></li>
   
                </ul>
            </section> 
        </nav>
    )
}

export default Navbar;