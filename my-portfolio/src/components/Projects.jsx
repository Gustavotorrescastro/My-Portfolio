import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

function Projects({ language }){
    const projectsData = [
        {
            title: 'Hellbound Blackjack',
            description: language === 'PT' ? 'Jogo de Blackjack sombrio desenvolvido em C com Raylib. Vencedor do prêmio de melhor Game Design.' : 'Dark Blackjack game developed in C with Raylib. Winner of the best Game Design award.',
            tech: ['C', 'Raylib', 'Game Design'],
            github: 'https://github.com/BrunoAU/Hellbound_Blackjack',
            link: '#'
        },
        {
            title: 'Recife de Memórias',
            description: language === 'PT'
                ? 'Líder do projeto focado em acessibilidade e consolidação de memória de curto e longo prazo em idosos com demência.'
                : 'Project leader focused on accessibility and short/long-term memory consolidation for elderly people with dementia.',
            tech: ['Liderança', 'Acessibilidade', 'UX', 'Pesquisa'],
            github: 'https://github.com/LHFalcao/Recife_de_Memorias'
        },
        {
            title: 'Projeto BRASA',
            description: language === 'PT'
                ? 'Portal de notícias em Django com filtros e recomendações. Projeto acadêmico com backend em Python, frontend em HTML, CSS e JavaScript.'
                : 'Django news portal with filters and recommendations. Academic project with Python backend and HTML/CSS/JS frontend.',
            tech: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/BrunoAU/projetoBRASA'
        },
        {
            title: language === 'PT' ? 'Projeto JC (Jornal do Commercio)' : 'JC Project (Jornal do Commercio)',
            description: language === 'PT'
                ? 'Gestor e desenvolvedor no projeto acadêmico com o Jornal do Commercio como cliente. Prototipação de melhorias para o portal de notícias com gestão, desenvolvimento Django, testes e deploy.'
                : 'Manager and developer on an academic project with Jornal do Commercio as client. Prototyped news portal improvements with project management, Django development, testing, and deploy.',
            tech: ['Django', 'Python', 'Gestão de Projetos', 'Deploy'],
            github: 'https://github.com/Gustavotorrescastro/ProjetoJC'
        }
    ];
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">
                    <span>{language === 'PT' ? 'Projetos em Destaque' : 'Featured Projects'}</span>
                </h2>
                <div className="projects-bento-grid">
                    {projectsData.map((project, idx) => (
                        <div key={idx} className="project-card bento-card animate-fade-in" style={{ animationDelay: `${idx * 0.2}s` }}>
                            {project.image && (
                                <div className="project-image-wrapper">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                </div>
                            )}
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-pill">{t}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Github Repo">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
