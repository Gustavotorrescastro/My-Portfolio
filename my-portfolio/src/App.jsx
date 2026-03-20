import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import './index.css';

function App(){
    const [language, setLanguage] = useState('PT');
    const toggleLanguage = ()=>{
        if(language === 'PT'){
            setLanguage('EN');
        }else{
            setLanguage('PT');
        }
    };
    return (
        <div className="App animate-fade-in">
            <Header language={language} toggleLanguage={toggleLanguage} />
            <main>
                <Hero language={language} />
                <About language={language} />
                <Skills language={language} />
                <Education language={language} />
                <Projects language={language} />
                <Certificates language={language} />
            </main>
            <Footer language={language} />
        </div>
    );
}

export default App;
