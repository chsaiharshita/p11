
import { createContext } from "react";

export const themes = {
  dark: "black",
  light: "white-content",
 
 
};

export const ThemeContext = createContext({
    theme: themes.light,
   
   
  changeTheme: () => {

    
  },
});


{/*
import React, { useEffect, useState } from 'react';

const themes = {
  light: 'light',
  dark: 'dark'
};



const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(themes.light);

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
      case themes.dark:
        document.body.classList.remove('white-content');
        break;
      default:
        break;
    }
    localStorage.setItem('theme', theme); // Store the selected theme
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
*/}