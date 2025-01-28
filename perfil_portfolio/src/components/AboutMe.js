import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className='about-me-container' id='aboutme'>
            <div className='about-me-overlay'></div>
            <div className='about-me-content'>
                <h1 className='about-me-title'>A little About Me</h1>
                <div className='about-me-hidden'>
                    <h1 className='about-me-hidden-title'>ABOUT ME</h1>
                </div>
            </div>
            <div className='about-me-details'>
                    <div className='about-me-text'>
                        <h3>Sou <span>Felipe Adriano</span>, um desenvolvedor web | Front-end</h3>
                        <p>Atuo no ramo da programação Front End há mais de 2 anos, crio projetos próprios e busco crescer na área. Trabalho como freelancer e, futuramente, com um perfil profissional.</p>

                        <p>A criação de sites e seus funcionamentos sempre me fascinou. Hoje sigo aplicando ideias inovadoras e soluções criativas para atender as necessidades do público alvo</p>
                        <p><strong>Minha <span>paixão</span> é transformar ideias em <span>experiências digitais</span> incríveis! Busco sempre aprender e aplicar novas <span>tecnologias</span> para criar interfaces mais <span>dinâmicas</span> e <span>intuitivas</span>.</strong></p>

                    </div>
                    <div className='about-me-table'>
                        <table>
                            <tbody>
                             <tr>
                                    <td><span>Nome:</span> Felipe Adriano</td>
                                </tr>
                                <tr>
                                 <td><span>Email:</span> devfullfelps@gmail.com</td>
                                </tr>
                             <tr>
                                 <td><span>Idade:</span> 22</td>
                                </tr>
                         </tbody>
                        </table>
                        <a className='whatsapp-button' href="https://wa.me/47984318419?text=Olá,                 %20gostaria%20de%20falar%20com%20Felipe%20Adriano!" target="_blank" rel="noopener noreferrer">Enviar via WhatsApp</a>
                    </div>
                </div>
                
        </div>
    );
};

export default AboutMe;
