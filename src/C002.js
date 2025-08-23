import React, { createContext } from 'react';
import C011 from './C010/C011';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const baseUrl = 'http://localhost:3000';
export const ThemeContext = createContext(null);
export const url = 'https://...';

fetch(`${baseUrl}/api/students`);

function App() {

  return (
    <BrowserRouter>
      <div className="" id="target">
        <React.Fragment>
          <C011 />
        </React.Fragment>
      </div>
    </BrowserRouter>
  );
}

export default App;  