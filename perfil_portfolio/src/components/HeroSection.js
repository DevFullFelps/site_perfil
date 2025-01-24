import React from 'react';
import './HeroSection.css'

const HeroSection = () => {
    return(
        <div className='hero-container'>
            <img src='../img_fundo_hero.jpg' alt='Background' className='hero-background'></img>
            <div className='hero-content'>
                <h4 className='hero-welcome'>Bem Vindo</h4>
                <h1 className='hero-title'>
                    <span className='typed-text'>Desenvolvedor WEB | Front-End</span>
                    <span className='cursor'>&nbsp;</span>
                </h1>
            </div>
        </div>
    )
}

export default HeroSection;