
import React from 'react';
import { Provider } from "react-redux";
import store from "../../Redux6/store";
import Logout from '../../Redux6/Logout';

function authLogout() {
return(
      <Provider store={ store }>
              <Logout />
          </Provider>   
    );
  }
export default authLogout;