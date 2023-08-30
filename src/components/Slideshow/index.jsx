import { useState } from 'react';

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
    <div>
      {pictures.length > 1 && (
        <div>
          <div onClick={handlePrev}>Précédent</div>
          <div onClick={handleNext}>Suivant</div>
          <div>{`${currentIndex + 1}/${pictures.length}`}</div>
        </div>
      )}
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
    </div>
  );
}

export default Slideshow;
