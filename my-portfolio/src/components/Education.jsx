import React from 'react';
import './Education.css';

function Education({ language }){
    const edItems = [
        {
            degree: language === 'PT' ? 'Bacharelado em Ciência da Computação' : 'Bachelor in Computer Science',
            school: 'CESAR School',
            period: language === 'PT' ? 'Início: 2025.1 | Término previsto: 2028.2' : 'Start: 2025.1 | Expected Graduation: 2028.2'
        },
        {
            degree: language === 'PT' ? 'Curso de Formação Web3' : 'Web3 Training Course',
            school: 'Universidade Federal de Pernambuco (UFPE) & Web3EduBrasil',
            period: language === 'PT' ? 'Conclusão do primeiro curso de Web3 do Brasil.' : 'Completion of the first Web3 course in Brazil.'
        }
    ];
    return (
        <section id="education" className="education-section">
            <div className="container">
                <h2 className="section-title">
                    <span>{language === 'PT' ? 'Formação Acadêmica' : 'Education'}</span>
                </h2>
                <div className="education-bento-grid">
                    {edItems.map((edItem, idx) => (
                        <div key={idx} className="education-card bento-card animate-fade-in" style={{ animationDelay: `${idx * 0.2}s` }}>
                            <div className="education-indicator"></div>
                            <div className="education-content">
                                <h3 className="education-degree">{edItem.degree}</h3>
                                <p className="education-school">{edItem.school}</p>
                                <p className="education-status">{edItem.period}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
