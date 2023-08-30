import { useState } from 'react';
import ArrowLeft from '../../assets/arrowLeft.svg';
import ArrowRight from '../../assets/arrowRight.svg';

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < pictures.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(pictures.length - 1);
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
