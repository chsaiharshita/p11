
import React from 'react';
import "./Api.css"
import { Provider } from "react-redux";
import UsersPage from "../../Redux2/Users.jsx";
import configureStore from "../../source/redux/stores/configureStore.js";

const store = configureStore();

const Events = () => {
return(
      <Provider store={store}>
              <UsersPage />
          </Provider>   
   )
  }
export default Events;