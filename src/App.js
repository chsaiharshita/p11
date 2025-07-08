import React, {createContext,} from 'react';
import Main from './Layout/MainComponent';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
 const baseUrl = 'http://localhost:3000';
export const ThemeContext = createContext(null);
export const url='https://...';
fetch(`${baseUrl}/api/students`);

function App() {

  return (
    <BrowserRouter  >
    <div className="" id="target">
    <React.Fragment > 
      <Main/>
    </React.Fragment> 
    </div>
    </BrowserRouter>
  );
}

export default App;