import React from 'react';
import { Activity, Code2, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Services() {
  const { services } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Activity':
        return <Activity size={26} />;
      case 'Code2':
        return <Code2 size={26} />;
      case 'Cpu':
        return <Cpu size={26} />;
      default:
        return <Code2 size={26} />;
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-eyebrow-container">
          {/* <span className="orange-bar"></span>
          <span className="section-eyebrow"></span> */}
        </div>
        <h2 className="section-title">I'M SPECIALIZED IN</h2>

        {/* Services Stack: One Below Another */}
        <div className="services-vertical-stack">
          {services.map((service, index) => (
            <div key={service.id} className="service-stacked-card">
              <div className="service-card-left">
                <div className="service-icon-box">
                  {getIcon(service.icon)}
                </div>
                <span className="service-number">0{index + 1}</span>
              </div>

              <div className="service-card-body">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                
                <div className="service-skill-tags">
                  {service.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="service-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
