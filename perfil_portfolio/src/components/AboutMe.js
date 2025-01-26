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
                        <h3>Eu sou <span>Felipe Adriano</span>, um desenvolvedor web | Front-end</h3>
                        <p>Atuo no ramo da programação Front End há mais ou menos 2 anos, criando projetos próprios e buscando crescer na área, começando como freelancer e, futuramente, com um perfil profissional.</p>

                        <p>A criação de sites e seus funcionamentos sempre me fascinou e, hoje, consigo aplicar minhas ideias e soluções criativas em cada projeto.</p>
                        <p><strong>Minha <span>paixão</span> é transformar ideias em <span>experiências digitais</span> incríveis. Busco sempre aprender e aplicar novas <span>tecnologias</span> para criar interfaces mais <span>dinâmicas</span> e <span>intuitivas</span>.</strong></p>

                    </div>
                    <div className='about-me-table'>
                        <table>
                            <tbody>
                             <tr>
                                    <td><span>Nome:</span> Felipe Adriano</td>
                                </tr>
                                <tr>
                                 <td><span>Email:</span> felipe@example.com</td>
                                </tr>
                             <tr>
                                 <td><span>Idade:</span> 22</td>
                                </tr>
                         </tbody>
                        </table>
                        <a className='whatsapp-button' href="https://wa.me/47984318419?text=Olá,                 %20gostaria%20de%20falar%20com%20Felipe%20Adriano!" target="_blank" rel="noopener noreferrer"> Enviar via WhatsApp</a>
                    </div>
                </div>
                
        </div>
    );
};

export default AboutMe;
