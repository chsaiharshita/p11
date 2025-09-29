import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import C002 from "./C002.js";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";

import { Provider } from "react-redux";
import store from "./source/redux/reducers/configureStore"; // ✅ correct path
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <C002 />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
