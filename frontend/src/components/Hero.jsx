import { useState, useEffect } from "react";

export default function Hero() {
  const images = ["/eucaristia.jpeg", "/Exposicion.jpeg", "/altar.jpeg", "/incienso.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-container">
      <div 
        className="hero-slider" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div 
            key={index}
            className="hero-slide"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="hero-overlay">
        <div className="hero-content">
          <h2>Bienvenido a nuestra Parroquia</h2>
          <div className="hero-line"></div>
          <p>Comunidad de Fe, Esperanza y Amor</p>
        </div>
      </div>
    </section>
  );
}