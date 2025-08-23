
import React from 'react';
import { Provider } from "react-redux";
import store from "../../Redux6/C085";
import Logout from '../../Redux6/C084';

function authLogout() {
return(
      <Provider store={ store }>
              <Logout />
          </Provider>   
    );
  }
export default authLogout;