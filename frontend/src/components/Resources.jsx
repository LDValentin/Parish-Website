// Resources.jsx
import React from 'react';

// You will likely need to import icons here. 
// For simplicity, we will use a text character for the icon placeholder for now.

const ResourceCard = ({ icon, title, link }) => (
  <div className="resource-card">
    <div className="card-icon-container">
      {/* Placeholder for the book icon. Use an actual SVG or icon component later */}
      <img className="card-image" 
          src={icon}            
          alt={`${title} icon`}/>
    </div>
    <h3 className="card-title">{title}</h3>
    <a href={link} target="_blank" rel="noopener noreferrer" className="card-button">
      LEER
    </a>
  </div>
);

export default function Resources() {
  const resourcesData = [
    { title: "LECTURAS DIARIAS", link: "https://bible.usccb.org/es/lectura-diaria-biblia", icon: "bible.jpg" }, 
    { title: "LITURGIA DE LAS HORAS", link: "https://liturgiadelashoras.github.io/", icon: "prayer.jpg" }, 
  ];

  return (
    <section id="links" className="resources-section">
      
      {/* Main Title Area - Updated to Spanish title shown in your image */}
      <header className="resources-header">
        <h2 className="resources-title">
          RECURSOS CATÓLICOS<br />
        </h2>
        {/* The short decorative line */}
        <div className="resources-divider"></div>
      </header>

      {/* Cards Container */}
      <div className="resources-grid">
        {resourcesData.map((resource, index) => (
          <ResourceCard 
            key={index}
            title={resource.title}
            link={resource.link}
            icon={resource.icon}
          />
        ))}
      </div>
    </section>
  );
}