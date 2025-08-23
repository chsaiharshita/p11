
import React from 'react';
import { Provider } from "react-redux";
import store from "../../Redux6/C085";
import Login from '../../Redux6/C083';

function authLogin() {
return(
      <Provider store={ store }>
              <Login />
          </Provider>   
    );
  }
export default authLogin;