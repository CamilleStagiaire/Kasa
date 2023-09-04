import React, { useState } from 'react';

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event) => {  
    if (event.key === 'Enter' || event.key === ' ') {
      toggleCollapse();
    }
  };

  return (
    <div className="collapses">
      <div
        tabIndex={0} 
        className={`collapse_title ${isOpen ? 'open' : ''}`}
        onClick={toggleCollapse}
        onKeyDown={handleKeyDown} 
      >
        {props.title}
      </div>
      <div className={`collapse_text ${isOpen ? 'open' : ''}`}>
        {props.content}
      </div>
    </div>
  );
}

export default Collapse;

