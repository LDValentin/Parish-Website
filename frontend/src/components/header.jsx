import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="logo">Parroquia Nuestra Señora de los Angeles</h1>

        {/* Desktop nav */}
        <nav className="nav nav-desktop">
          <a href="#mass-hours">Mass Hours</a>
          <a href="#groups">Groups</a>
          <a href="#links">Resources</a>
          <a href="#map">Location</a>
        </nav>

        {/* Hamburger (mobile only) */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="nav nav-mobile">
          <a onClick={() => setIsOpen(false)} href="#mass-hours">Mass Hours</a>
          <a onClick={() => setIsOpen(false)} href="#groups">Groups</a>
          <a onClick={() => setIsOpen(false)} href="#links">Resources</a>
          <a onClick={() => setIsOpen(false)} href="#map">Location</a>
        </nav>
      )}
    </header>
  );
}
