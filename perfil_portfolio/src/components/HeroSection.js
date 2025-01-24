import React from 'react';
import Typewriter from 'typewriter-effect';
import './HeroSection.css';

const HeroSection = () => {
    const scrollToContent = () => {
        const content = document.getElementById('content');
        content.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='hero-container'>
            <img src='../img_fundo_hero.jpg' alt='Background' className='hero-background'></img>
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
                <div className="scroll-down" onClick={scrollToContent}>
                    <div className="arrow"></div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
