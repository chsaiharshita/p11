
import React from 'react';
import "./Api.css";
import { Provider } from "react-redux";
import UsersPage from "../../C061/C061.jsx";
import configureStore from "../../source/redux/C057/C057.js";

const store = configureStore();

const Api = () => {
return(
      <Provider store={store}>
              <UsersPage />
          </Provider>   
   )
  }
export default Api;