import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './C002.js';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import { Provider } from 'react-redux';
import store from './Components/C1001/C1005.js';
  // path from src/index.js to redux/store.js


// 👇 Redux store import

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
        <App />
     
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
