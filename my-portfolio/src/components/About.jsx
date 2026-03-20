import React from 'react';
import './About.css';

function About({ language }){
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">
                    <span>{language === 'PT' ? 'Sobre Mim' : 'About Me'}</span>
                </h2>
                <div className="about-single bento-card animate-fade-in">
                        <p>
                            {language === 'PT' 
                                ? 'Estudante de Ciência da Computação apaixonado por tecnologia e focado no desenvolvimento de aplicações web modernas. Busco estágio em desenvolvimento de software, com forte interesse em construção e integração de APIs e modelagem de banco de dados, aplicando meus conhecimentos sólidos em ecossistemas JavaScript, TypeScript, React e Next.js.' 
                                : 'Computer Science student passionate about technology and focused on modern web application development. Seeking a software development internship, with a strong interest in building and integrating APIs and database modeling, applying my solid knowledge in JavaScript, TypeScript, React, and Next.js ecosystems.'}
                        </p>
                        <p>
                            {language === 'PT'
                                ? 'Destaco minha capacidade de trabalhar de forma altamente colaborativa. Possuo experiência prática com versionamento Git, metodologias ágeis e comunicação não violenta. Valorizo a sinergia da equipe para criar soluções seguras, eficientes e escaláveis.'
                                : 'I highlight my ability to work highly collaboratively. I have practical experience with Git versioning, agile methodologies, and non-violent communication. I value team synergy to create secure, efficient, and scalable solutions.'}
                        </p>
                    </div>
            </div>
        </section>
    );
}

export default About;
