import React, { useState } from 'react';

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapses">
      <div
        className={`collapse_title ${isOpen ? 'open' : ''}`}
        onClick={toggleCollapse}>
        {props.title}
      </div>
      <div className={`collapse_text ${isOpen ? 'open' : ''}`}>
        {props.content}
      </div>
    </div>
  );
}

export default Collapse;
