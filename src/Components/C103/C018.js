import React, { useState, useEffect } from 'react';
import './C101.css';

export default function Fontsize() {
  const [zoom, setZoom] = useState(1); // 1 = 100%

  useEffect(() => {
    document.body.style.zoom = zoom;
  }, [zoom]);

  const increaseFont = () => {
    setZoom(prev => Math.min(prev + 0.1, 1.5)); // max 150%
  };

  const decreaseFont = () => {
    setZoom(prev => Math.max(prev - 0.1, 0.7)); // min 70%
  };

  return (
    <div className="fontsize-buttons">
      <button onClick={increaseFont}>A+</button>
      <button onClick={decreaseFont}>A−</button>
    </div>
  );
}
