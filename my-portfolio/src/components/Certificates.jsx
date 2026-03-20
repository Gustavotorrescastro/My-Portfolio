import React from 'react';
import './Certificates.css';

function Certificates({ language }){
    const certsData = [
        { title: 'JavaScript Essentials 1 - Cisco', image: '/js_essentials_cert.png' },
        { title: 'Python Essentials 1 - Cisco', image: '/python_essentials_cert.png' },
        { title: 'Ethereum Developer Pack', image: '/ethereum_cert.png' }
    ];
    return (
        <section id="certificates" className="certificates-section">
            <div className="container">
                <h2 className="section-title">
                    <span>{language === 'PT' ? 'Certificados Escolhidos' : 'Selected Certificates'}</span>
                </h2>
                <div className="certificates-bento-grid">
                    {certsData.map((cert, idx) => (
                        <div key={idx} className="certificate-card bento-card animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                            <div className="certificate-image-wrapper">
                                <img src={cert.image} alt={cert.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certificates;
