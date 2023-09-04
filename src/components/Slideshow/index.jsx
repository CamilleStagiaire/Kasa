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

  return (
    <div className="logement_slideshow">
       <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
      {pictures.length > 1 && (
        <div className="logement_slideshow_arrows">
          <div className="prev" onClick={handlePrev}></div>
          <div className="next" onClick={handleNext}></div>
        </div>
      )}
    </div>
  );
}

export default Slideshow;
