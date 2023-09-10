import { useState } from 'react';

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (newIndex) => {
    setTimeout(() => {
      setCurrentIndex(newIndex);
    }, 500);
  };

  const handleNext = () => {
    if (currentIndex < pictures.length - 1) {
      changeSlide(currentIndex + 1);
    } else {
      changeSlide(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      changeSlide(currentIndex - 1);
    } else {
      changeSlide(pictures.length - 1);
    }
  };

  const handleKeyDown = (e, callback) => {
    if (e.key === 'Enter' || e.key === ' ') {
      callback();
    }
  };

  return (
    <div className="logement_slideshow">
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
      {pictures.length > 1 && (
        <div className="logement_slideshow_arrows">
          <button
            className="prev"
            onClick={handlePrev}
            onKeyDown={(e) => handleKeyDown(e, handlePrev)}
            aria-label="Image précédente"
          ></button>
          <button
            className="next"
            onClick={handleNext}
            onKeyDown={(e) => handleKeyDown(e, handleNext)}
            aria-label="Image suivante"
          ></button>
        </div>
      )}
    </div>
  );
}

export default Slideshow;
