import React from 'react';
import { Download } from 'lucide-react';
import './Hero.css';

function Hero({ language }){
    return (
        <section id="hero" className="hero-section">
            <div className="hero-background">
                <div className="mesh-gradient"></div>
            </div>
            <div className="container hero-content">
                <div className="hero-text-container">
                    <p className="hero-eyebrow text-gradient animate-fade-in">
                        {language === 'PT' ? 'Estudante de Ciência da Computação' : 'Computer Science Student'}
                    </p>
                    <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        Gustavo<br />Torres Castro
                    </h1>
                    <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        {language === 'PT' 
                            ? 'Construindo experiências digitais modernas com código limpo e foco absoluto no usuário.' 
                            : 'Building modern digital experiences with clean code and absolute focus on the user.'}
                    </p>
                    <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <a href={language === 'PT' ? '/curriculo_pt.pdf' : '/CV Gustavo Castro - English.pdf'} target="_blank" rel="noopener noreferrer" className="btn-primary">
                            <Download size={20} />
                            {language === 'PT' ? 'Baixar Currículo' : 'Download CV'}
                        </a>
                        <a href="#contact" className="btn-secondary">
                            {language === 'PT' ? 'Falar comigo' : 'Contact me'}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
