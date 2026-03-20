import React from 'react';
import './Skills.css';

function Skills({ language }){
    const skillsData = [
        {
            categoryName: language === 'PT' ? 'Frontend & Ferramentas Essenciais' : 'Frontend & Core Tools',
            skillList: [
                'JavaScript / TypeScript', 
                'React.js / Next.js', 
                'Tailwind CSS', 
                'HTML & CSS',
                'Git & Fluxo de Versionamento'
            ]
        },
        {
            categoryName: language === 'PT' ? 'Integração & Backend' : 'Integration & Backend',
            skillList: [
                language === 'PT' ? 'Criação/Consumo de APIs e Backend' : 'APIs & Backend Integration',
                'PostgreSQL',
                language === 'PT' ? 'SQL Básico' : 'Basic SQL',
                'Python',
                'C',
                'Java'
            ]
        },
        {
            categoryName: language === 'PT' ? 'Deploy & Agilidade' : 'Deploy & Agile',
            skillList: ['Vercel', 'Netlify', 'Azure', 'VSCode', 'Jira', 'Trello']
        }
    ];
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">
                    <span>{language === 'PT' ? 'Stack Técnico' : 'Technical Stack'}</span>
                </h2>
                <div className="skills-bento-wrapper">
                    {skillsData.map((categoryGroup, index) => (
                        <div key={index} className={`skill-bento-card bento-card animate-fade-in card-${index}`} style={{ animationDelay: `${index * 0.1}s` }}>
                            <h3 className="category-title text-gradient">{categoryGroup.categoryName}</h3>
                            <div className="skills-pill-container">
                                {categoryGroup.skillList.map((skillItem, i) => (
                                    <span key={i} className="skill-pill">
                                        {skillItem}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
