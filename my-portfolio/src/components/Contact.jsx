import React from 'react';
import { Mail, Phone } from 'lucide-react';
import './Contact.css';

function Contact({ language }){
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">
                    <span>{language === 'PT' ? 'Contato' : 'Contact'}</span>
                </h2>
                <div className="contact-card glass animate-fade-in">
                    <p className="contact-text">
                        {language === 'PT' 
                            ? 'Estou aberto a oportunidades de estágio e projetos. Sinta-se à vontade para entrar em contato!' 
                            : 'I am open to internship opportunities and projects. Feel free to reach out!'}
                    </p>
                    <div className="contact-links">
                        <a href="mailto:gustavotorrescastro@gmail.com" className="contact-item">
                            <Mail size={24} /> gustavotorrescastro@gmail.com
                        </a>
                        <a href="tel:+5581992861842" className="contact-item">
                            <Phone size={24} /> +55 (81) 99286-1842
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
