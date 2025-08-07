
import React from 'react';
import "./Api.css"
import { Provider } from "react-redux";
import configureStore from "../../source/redux/stores/configureStore.js";

const store = configureStore();

const Newsapi = () => {
return(
      <Provider store={store}>
            
          </Provider>   
   )
  }
export default Newsapi;