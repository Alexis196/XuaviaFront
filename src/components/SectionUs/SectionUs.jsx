import React from 'react';
import './section-us.css';

const NosotrosSection = ({ title, content, sectionClass }) => {
  return (
    <div className="nos">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default NosotrosSection;
