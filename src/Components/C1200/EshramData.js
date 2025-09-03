
import React from 'react';
import { Provider } from "react-redux";
import store from "../../Redux5/store";
import Posts from "../../Redux5/Posts";



function EshramData() {
return(
      <Provider store={ store }>
              <Posts />
          </Provider>   
   );
  }
export default EshramData ;