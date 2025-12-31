// Groups.jsx (Revised Structure)
import React from 'react';
import { useState } from 'react';

const DEFAULT_ICON_CHAR = '👥'; 
const ImageModal = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <div className="modal-slider">
          <button className="nav-btn prev" onClick={prevSlide}>&#10094;</button>
          <img src={images[currentIndex]} alt="Gallery" className="modal-image" />
          <button className="nav-btn next" onClick={nextSlide}>&#10095;</button>
        </div>
        
        <div className="image-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

const GroupCard = ({ icon, title, number, description, images, onIconClick }) => (
  <div className="group-card resource-card"> 
    <div className="card-icon-container">
      {icon && typeof icon === 'string' ? (
        <img 
          className="card-image clickable-logo" // Added class for hover effect
          src={icon}            
          alt={`${title} icon`}
          onClick={() => images && onIconClick(images)} // Trigger modal
        />
      ) : (
        <span className="card-icon" aria-hidden="true">👥</span>
      )}
    </div>
    <h3 className="card-title">{title}</h3>
    <p className="group-description" style={{ whiteSpace: 'pre-line' }}>{description}</p> 
    
    {number && (
        <a href={`tel:${number.replace(/[-\s]/g, '')}`} className="group-phone-link">
            📞 {number}
        </a>
    )}
    {images && <small className="gallery-hint"> Haz click en el logo para ver fotos</small>}
  </div>
);

export default function Groups() {
  const [activeGallery, setActiveGallery] = useState(null);
  const groupsData = [
    { 
      title: "CÁRITAS PARROQUIAL", 
      number: "787-452-4117", 
      description: "Cáritas de Puerto Rico trabaja para combatir la marginación y la desesperanza de los más débiles a la luz del amor de Dios. \n Contacto: Diácono Ferdinand",
      icon: "caritas.jpg" 
    }, 
    { 
      title: "CATEQUESIS", 
      number: "787-579-6962", 
      description: "Preparación de niños, jóvenes, y adultos para los sacramentos y la vida de la fe. \n Coordinadora: Sra. Tuyan Hammad", 
      icon: "catequesis.jpg",
      images: ["catequesis1.jpeg", "catequesis2.jpeg", "catequesis3.jpeg", "catequesis4.jpeg"], 
    }, 
    { 
      title: "PASTORAL JUVENIL \n Guerreros del Amor Divino", 
      number: "787-315-2694",
      description: "Espacio para que los jóvenes fortalezcan y compartan su fe. \n Coordinador: Josué Cordero",
      icon: "jovenes.jpeg",
      images: ["jovenes1.jpeg", "jovenes2.jpeg", "jovenes3.jpeg", "jovenes4.jpeg", "jovenes5.jpeg", "jovenes6.jpeg"],
    },
    { 
      title: "LEGIÓN DE MARÍA",
      icon: "Legion_de_Maria.png",
      description: "Buscamos la santificación de nuestros miembros y del mundo mediante la oración, la devoción a la Virgen María y el apostolado activo. \n Contacto: Sra. Áurea Olivo",
      number: "787-689-6623" },
    {
      title: "JESÚS SANA", 
      icon: "jesus_sana.png",
      description: "Ministerio de unidad a través de la oración y la fe en Jesucristo. \n Contacto: Carmen Torres",
      number: "787-201-1644", 
    },
    { title: "Familia de Jesús", 
      description: "Movimiento que ofrece retiros matrimoniales a matrimonios sacramentales, civiles y parejas en convivencia que deseen casarse. \n Contacto: Marita Olivo",
      number: "787-233-9691" ,
      icon: "familia_de_jesus.jpg"

    },
    { 
      title: "Servidores del Altar",
      icon: "monaguillos.jpeg",
      description: "Niños y jóvenes que asisten al sacerdote durante la celebración de los sacramentos. \n Coordinadora: Sra. Brenda Bermúdez",
      number: "787-567-4568",
      images: ["monaguillos1.jpeg", "monaguillos2.jpeg", "monaguillos3.jpeg", "monaguillos4.jpeg", "monaguillos5.jpeg"],

    },
    {title: "Coro Juvenil \n Laudis", 
      description: "Prestamos nuestras voces para honor y gloria de Dios. \n Directora: Génesis Cordero",
      icon: "coro.png",
      number: "787-699-8914",
      images: ["coro1.jpeg", "coro2.jpeg", "coro3.jpeg", "coro4.jpeg"],
    },
    // Add more groups as needed
  ];

 return (
    <section id="groups" className="groups-section mass-times-container">
      <header className="resources-header">
        <h2 className="resources-title">GRUPOS PARROQUIALES</h2>
        <div className="resources-divider"></div>
      </header>

      <div className="resources-grid">
        {groupsData.map((group, index) => (
          <GroupCard 
            key={index}
            title={group.title}
            number={group.number}
            description={group.description}
            icon={group.icon}
            images={group.images} // FIX 2: Added images prop
            onIconClick={(imgs) => setActiveGallery(imgs)} // FIX 3: Corrected syntax
          />
        ))}
      </div>

      {activeGallery && (
        <ImageModal 
          images={activeGallery} 
          onClose={() => setActiveGallery(null)} 
        />
      )}
    </section>
  );
}