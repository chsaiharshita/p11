
import React from 'react';
import { Provider } from "react-redux";
import store from "../../Redux6/store";
import Login from '../../Redux6/Login';

function authLogin() {
return(
      <Provider store={ store }>
              <Login />
          </Provider>   
    );
  }
export default authLogin;