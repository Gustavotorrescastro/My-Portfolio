import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import './Header.css';

function Header({ language, toggleLanguage }){
    const [scrolled, setScrolled] = useState(false);
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 20){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="nav-pill">
                <a href="#hero" className="logo text-gradient">GC</a>
                <div className="nav-links">
                    <a href="#about">{language === 'PT' ? 'Sobre' : 'About'}</a>
                    <a href="#skills">{language === 'PT' ? 'Habilidades' : 'Skills'}</a>
                    <a href="#projects">{language === 'PT' ? 'Projetos' : 'Projects'}</a>
                </div>
                <div className="nav-actions">
                    <button className="icon-btn" onClick={toggleLanguage} aria-label="Toggle Language" title={language === 'PT' ? 'Mudar para Inglês' : 'Switch to Portuguese'}>
                        <Globe size={18} />
                        <span className="lang-text">{language}</span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
