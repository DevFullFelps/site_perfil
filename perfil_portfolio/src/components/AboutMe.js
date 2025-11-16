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
                    <h3>Sou <span>Felipe Adriano</span>, Desenvolvedor <span>Full-Stack</span></h3>

                    <p>Sou desenvolvedor apaixonado por <span>tecnologia</span> e pela criação de <span>soluções</span> que conectam pessoas, processos e resultados. Atuo no desenvolvimento de <span>aplicações web</span>, unindo front-end e back-end para entregar sistemas funcionais, modernos e bem estruturados.</p>

                    <p>Tenho experiência na criação de <span>interfaces responsivas</span> e na construção de funcionalidades sólidas no <span>back-end</span>, sempre buscando <span>clareza</span>, <span>desempenho</span> e <span>qualidade</span> no código.</p>

                    <p><strong>Acredito no poder da <span>tecnologia</span> para transformar ideias em <span>experiências digitais</span> marcantes — e sigo evoluindo continuamente, aprendendo novas <span>ferramentas</span> e explorando soluções <span>criativas</span> que geram <span>valor real</span>.</strong></p>



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
                                <td><span>Idade:</span> 23</td>
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
