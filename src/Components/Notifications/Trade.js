
import React from 'react';
import "./Api.css"
import { Provider } from "react-redux";
import UsersPage from "../../Redux4/Users.jsx";
import configureStore from "../../source/redux/stores/configureStore.js";

const store = configureStore();

const Newsapi = () => {
return(
      <Provider store={store}>
              <UsersPage />
          </Provider>   
   )
  }
export default Newsapi;