import React from "react";
import "./Contact.css"; // Certifique-se de que o caminho está correto
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <div className="contact-content">
                <h1 className="contact-title">Contact</h1>
                <div className="contact-hidden">
                    <h1 className="contact-hidden-title">CONTACT</h1>
                </div>
            </div>

            <div className="contact-sections">
                {/* Informações de contato */}
                <div className="contact-info">
                    <p className="contact-item">
                        <span className="contact-item-initial">Endereço</span>: Rua Paulo Gielow / 167
                    </p>
                    <p className="contact-item">
                        <span className="contact-item-initial">Telefone</span>: (47) 98431-8419
                    </p>
                    <p className="contact-item">
                        <span className="contact-item-initial">Email</span>: devfullfelps@gmail.com
                    </p>

                    <div className="contact-social">
                        <h2 className="contact-subtitle">Siga-me</h2>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=61564205696353" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} />
                            </a>
                            <a href="https://www.instagram.com/devfelps/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} />
                            </a>
                            <a href="https://www.linkedin.com/in/felipe-adriano-967b89312/?jobid=1234" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} />
                            </a>
                            <a href="https://github.com/DevFullFelps" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={30} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Botão de contato via WhatsApp */}
                <div className="contact-action">
                    <h2 className="contact-subtitle">Entre em contato comigo</h2>
                    <a
                        href="https://wa.me/47984318419"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-button"
                    >
                        Enviar via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
