import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './ThemeContext.js';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

 
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
  switch (theme) {
    case themes.light:
      
      document.body.classList.add('white-content');
      break;
      default:
    case themes.dark:
      document.body.classList.remove('white-content','green-content');
      
        break;
       
  }
  localStorage.setItem('theme', theme);
}, [theme]); 
  return (
    <ThemeContext.Provider
  
    
     value={{ theme: theme, changeTheme: changeTheme }}>
         
    {props.children}
    </ThemeContext.Provider>
  );
}



 