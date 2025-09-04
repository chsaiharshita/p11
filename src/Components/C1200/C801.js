
import React from 'react';
import { Provider } from "react-redux";
import store from "../C079/C085";
import Login from '../C079/C083';

function authLogin() {
return(
      <Provider store={ store }>
              <Login />
          </Provider>   
    );
  }
export default authLogin;