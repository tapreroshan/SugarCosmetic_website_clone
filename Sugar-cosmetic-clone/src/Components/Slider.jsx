import React, { useState, useEffect } from 'react';
import './slider.css';
import slide1 from '../images/slide-image1.png';
import slide2 from '../images/slide-image2.png';
import slide3 from '../images/slide-image4.png';
import slide4 from '../images/slide-image3.png';
import slide5 from '../images/slide-image5.png';
import slide6 from '../images/slide-image6.png';

export const Slider = () => {
  const slides = [slide1, slide2, slide3,slide4,slide5,slide6]; // Array of slide images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

 
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <main className="main-section">
      <div className="slider">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <img
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slide-image"
        />
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active-dot' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </main>
  );
};
