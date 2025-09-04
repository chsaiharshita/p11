
import React from 'react';
import { Provider } from "react-redux";
import store from "../../Redux8/store";
import Reg from "../../Redux8/Reg";



function eshramData1() {
return(
      <Provider store={ store }>
              <Reg />
          </Provider>   
   );
  }
export default eshramData1;