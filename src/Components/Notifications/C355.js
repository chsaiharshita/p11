
import React from 'react';
import { Provider } from "react-redux";
import store from "../../C075/C078";
import Posts from "../../C075/C076";



function C355() {
return(
      <Provider store={ store }>
              <Posts />
          </Provider>   
   );
  }
export default C355;