import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import ThemeContextWrapper from './Components/DarkMode/ThemeContextWrapper.js';
// import $ from 'jquery';
// import Popper from 'popper.js';

ReactDOM.render(
  <React.StrictMode>
     <ThemeContextWrapper >
    
    <App />
    </ThemeContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

