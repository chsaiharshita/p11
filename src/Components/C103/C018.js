import React, { useState, useEffect } from 'react';
import './C101.css';

export default function Fontsize() {
  // State now manages the root font size as a percentage
  const [fontSize, setFontSize] = useState(100); // 100%

  // This effect updates the font-size on the <html> element
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  const increaseFont = () => {
    // Increase font size by 10%, max 150%
    setFontSize(prev => Math.min(prev + 10, 150));
  };

  const decreaseFont = () => {
    // Decrease font size by 10%, min 70%
    setFontSize(prev => Math.max(prev - 10, 70));
  };

  return (
    <div className="fontsize-buttons">
      {/* ✅ Added aria-label for better accessibility */}
      <button onClick={increaseFont} aria-label="Increase font size">A+</button>
      <button onClick={decreaseFont} aria-label="Decrease font size">A−</button>
    </div>
  );
}