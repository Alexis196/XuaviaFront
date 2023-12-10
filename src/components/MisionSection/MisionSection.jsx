import React from 'react';
import './mision-section.css';

const MisionSection = ({ title, content, sectionClass }) => {
  return (
    <div className="mision">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default MisionSection;
