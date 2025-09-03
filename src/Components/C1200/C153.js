
import React from 'react';
import "./Api.css"
import { Provider } from "react-redux";
import UsersPage from "../C067/C064.jsx";
import configureStore from "../../source/redux/C057/C057.js";

const store = configureStore();

const Rewards = () => {
return(
      <Provider store={store}>
              <UsersPage />
          </Provider>   
   )
  }
export default Rewards;