import { useEffect, useRef, useState } from 'react';
import './Carousel.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export function Carousel({
  slides = [],
  renderSlide,
  slidesPerView = 3,
  spacing = 16,
  showArrows = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 3000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = Math.ceil(slides.length / slidesPerView);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      goTo((currentIndex + 1) % totalPages);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, currentIndex, totalPages]);

  const goTo = (page) => {
    const newIndex = Math.max(0, Math.min(page, totalPages - 1));
    setCurrentIndex(newIndex);
    const offset = newIndex * (trackRef.current.clientWidth + spacing);
    trackRef.current.style.transform = `translateX(-${offset}px)`;
  };

  const prev = () => {
    if (currentIndex === 0) {
      goTo(totalPages - 1);
      return;
    } 
    goTo(currentIndex - 1);
  };
  const next = () => {
    if (currentIndex === totalPages - 1) {
      goTo(0);
      return;
    }
    goTo(currentIndex + 1);
  };

  return (
    <div className="carousel-container">
      {showArrows && (
        <button onClick={prev} className="carousel-arrow carousel-arrow-left">
          <KeyboardArrowLeftIcon sx={{ color: "#00FFFF" }} />
        </button>
      )}
      <div 
        className="carousel-track-wrapper"
        ref={trackRef}
        style={{ gap: `${spacing}px` }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="carousel-slide"
            style={{ width: `calc((100% - ${(slidesPerView - 1) * spacing}px) / ${slidesPerView})`}}
          >
            {renderSlide(slide, idx)}
          </div>
        ))}
      </div>
      {showArrows && (
        <button onClick={next} className="carousel-arrow carousel-arrow-right">
          <KeyboardArrowRightIcon sx={{ color: "#00FFFF"}} />
        </button>
      )}
      {showDots && (
        <div className="carousel-dots">
          {Array.from({ length: totalPages}).map((_, page) => (
            <button
              key={page}
              onClick={() => goTo(page)}
              className={`carousel-dot ${currentIndex === page ? 'active' : ''}`}	
            />
          ))}
        </div>
      )}
    </div>
  )
}