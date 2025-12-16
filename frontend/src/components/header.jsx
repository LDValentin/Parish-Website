// header.jsx (Improved)
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Function to close menu and navigate (used for mobile links)
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <img 
            src="/logo.jpeg" // Path assuming logo.jpeg is in your public/ directory
            alt="Parroquia Nuestra Señora de los Angeles Logo"
            className="logo-img" 
          />
          <h1 className="name logo-text">Parroquia Nuestra Señora de los Angeles</h1>
        </div>
        
        {/* Desktop nav */}
        <nav className="nav nav-desktop">
          <a href="#mass-hours">Mass Hours</a>
          <a href="#groups">Groups</a>
          <a href="#links">Resources</a>
          <a href="#map">Location</a>
        </nav>

        {/* Hamburger (mobile only) - Added aria attributes */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu" // Connects button to the menu
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu - Only render if open for performance */}
      {isOpen && (
        <nav 
          id="mobile-menu"
          className="nav nav-mobile"
        >
          <a onClick={handleNavLinkClick} href="#mass-hours">Mass Hours</a>
          <a onClick={handleNavLinkClick} href="#groups">Groups</a>
          <a onClick={handleNavLinkClick} href="#links">Resources</a>
          <a onClick={handleNavLinkClick} href="#map">Location</a>
        </nav>
      )}
    </header>
  );
}