// Groups.jsx (Revised Structure)
import React from 'react';

const DEFAULT_ICON_CHAR = '👥'; 

// 1. Updated Props: Removed 'link', added 'description'.
const GroupCard = ({ icon, title, number, description }) => (
  // Reusing the 'group-card resource-card' classes for consistent styling
  <div className="group-card resource-card"> 
    <div className="card-icon-container">
      {/* Conditional rendering for image/icon remains the same */}
      {icon && typeof icon === 'string' ? (
        <img 
          className="card-image" 
          src={icon}            
          alt={`${title} icon`}
        />
      ) : (
        <span className="card-icon" aria-hidden="true">
          {DEFAULT_ICON_CHAR} 
        </span>
      )}
    </div>
    <h3 className="card-title">{title}</h3>
    
    {/* 2. New Element: Display the brief description */}
    <p className="group-description">{description}</p> 
    
    {/* 3. Display Phone Number: Display the contact number, wrapped in an accessible link */}
    {number && (
        <a href={`tel:${number.replace(/[-\s]/g, '')}`} className="group-phone-link">
            📞 {number}
        </a>
    )}
  </div>
);

export default function Groups() {
  const groupsData = [
    { 
      title: "CÁRITAS PARROQUIAL", 
      number: "787-452-4117", 
      description: "Cáritas de Puerto Rico trabaja para combatir la marginación y la desesperanza de los más débiles a la luz del amor de Dios. \n Contacto: Diacono Ferdinand",
      icon: "caritas.jpg" 
    }, 
    { 
      title: "CATEQUESIS INFANTIL", 
      number: "787-579-6962", 
      description: "Preparación de niños, jóvenes, y adultos para los sacramentos y la vida de la Fe. \n Coordinadora: Sra. Tuyan Hamad", 
      icon: "catequesis.jpg",
    }, 
    { 
      title: "PASTORAL JUVENIL", 
      number: "787-315-2694",
      description: "Espacio para que los jóvenes fortalezcan y compartan su fe. \n Coordinador: Josué Cordero",
      icon: "jovenes.jpeg",
    },
    { 
      title: "LEGION DE MARÍA",
      icon: "Legion_de_Maria.png",
      description: "Buscamos la santificación de nuestros miembros y del mundo mediante la oración, la devoción a la Virgen María y el apostolado activo \n Contacio: Sra. Áurea Olivo",
      number: "787-689-6623" },
    {
      title: "JESUS SANA", 
      icon: "jesus_sana.png",
      description: "Ministerio de unidad a través de la oración y la fe en Jesucristo. \n Contacto: Carmen Torres",
      number: "787-201-1644", 
    },
    { title: "Familia de Jesús", 
      description: "Movimiento que ofrece, retiros matrimoniales a matrimonios sacramentales, civiles y parejas en convivencia que deseen casarse \n Contacto: Marita Olivo",
      number: "787-233-9691" 

    },
    { 
      title: "Servidores del Altar",
      icon: "monaguillos.jpeg",
      description: "Niños y jóvenes que asisten al sacerdote durante la celebración de los sacramentos. \n Coordinadora: Sra. Brenda Bermúdez",
      number: "787-567-4568" 

    },
    {title: "Coro Juvenil", 
      description: "Prestamos nuestras voces para honor y gloria de Dios \n Directora: Génesis Cordero",
      icon: "coro.png",
      number: "787-699-8914" },
    // Add more groups as needed
  ];

  return (
    <section id="groups" className="groups-section mass-times-container">
      
      <header className="resources-header">
        <h2 className="resources-title">
          GRUPOS PARROQUIALES
        </h2>
        <div className="resources-divider"></div>
      </header>

      <div className="resources-grid">
        {groupsData.map((group, index) => (
          <GroupCard 
            key={index}
            title={group.title}
            number={group.number}
            description={group.description} // Pass the new prop
            icon={group.icon}
          />
        ))}
      </div>
    </section>
  );
}