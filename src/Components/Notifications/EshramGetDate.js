
import React from 'react';
import { Provider } from "react-redux";
import store from "../../Redux7/store";
import Reg from "../../Redux7/Reg";



function EshramGetDate() {
return(
      <Provider store={ store }>
              <Reg />
          </Provider>   
   );
  }
export default EshramGetDate;