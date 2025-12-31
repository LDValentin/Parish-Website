import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Column 1: Parish Info */}
        <div className="footer-column">
          <h3 className="footer-heading">Nuestra Parroquia</h3>
          <p>Parroquia Nuestra Señora de los Ángeles</p>
          <p> Barr. Angeles, Utuado, Puerto Rico</p>
          <p>Tel: (787) 420-3027</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Enlaces</h3>
          <ul className="footer-links">
            <li><a href="#mass-hours">Horarios</a></li>
            <li><a href="#links">Recursos</a></li>
            <li><a href="#groups">Grupos</a></li>
            <li><a href="https://maps.app.goo.gl/8poZ32Psuocpf6bq6" target="_blank" rel="noopener noreferrer">Ubicación</a></li>
          </ul>
        </div>

        {/* Column 3: Social/Office Hours */}
        <div className="footer-column">
          <h3 className="footer-heading">Oficina Parroquial</h3>
          <p>Miércoles y Jueves</p>
          <p>9:00 AM - 12:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Parroquia Nuestra Señora de los Ángeles. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}