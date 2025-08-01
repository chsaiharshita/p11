import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import { Provider } from 'react-redux';
import store from './Redux10/store.js';  // path from src/index.js to redux/store.js

import ThemeContextWrapper from './Components/DarkMode/ThemeContextWrapper.js';

// 👇 Redux store import

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextWrapper>
        <App />
      </ThemeContextWrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
