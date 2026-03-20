import React from 'react';
import { Linkedin, Github, Instagram, Mail, Phone } from 'lucide-react';
import './Footer.css';

function Footer({ language }){
    return (
        <footer id="contact" className="footer">
            <div className="container footer-content">
                <div className="footer-left">
                    <p className="footer-dev">Desenvolvido por <strong>Gustavo Torres Castro</strong></p>
                    <p className="footer-headline">
                        {language === 'PT' ? 'Aberto a oportunidades de estágio e projetos.' : 'Open to internship opportunities and projects.'}
                    </p>
                </div>

                <div className="footer-right">
                    <div className="footer-contact-links">
                        <a href="mailto:gustavotorrescastro@gmail.com" className="footer-link">
                            <Mail size={18} />
                            <span>gustavotorrescastro@gmail.com</span>
                        </a>
                        <a href="tel:+5581992861842" className="footer-link">
                            <Phone size={18} />
                            <span>+55 (81) 99286-1842</span>
                        </a>
                    </div>
                    <div className="social-links">
                        <a href="https://linkedin.com/in/gustavotorrescastro" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/Gustavotorrescastro" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Github size={20} />
                        </a>
                        <a href="https://instagram.com/gustavotcastr0" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
