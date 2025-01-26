import React from 'react';
import Typewriter from 'typewriter-effect';
import './HeroSection.css';

const HeroSection = () => {
    const scrollToAboutMe = () => {
        const aboutMeSection = document.getElementById('aboutme'); // Certifique-se de que o ID corresponda
        aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id='home' className='hero-container'>
            <img src='../img_fundo_hero.jpg' alt='home' className='hero-background'></img>
            <div className='hero-overlay'></div>
            <div className='hero-content'>
                <h4 className='hero-welcome'>Bem Vindo</h4>
                <h1 className='hero-title'>
                    <Typewriter
                        options={{
                            strings: ['Desenvolvedor WEB | Front-End'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50, // Velocidade ao apagar
                            delay: 100, // Velocidade ao digitar
                        }}
                    />
                </h1>
                <div className="scroll-down" onClick={scrollToAboutMe}>
                    <div className="arrow"></div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
