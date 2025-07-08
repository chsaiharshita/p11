
import React from 'react';
import { Provider } from "react-redux";
import store from "../../Redux9/store";
import Posts from "../../Redux9/Posts";



function EshramNew() {
return(
      <Provider store={ store }>
              <Posts />
          </Provider>   
   );
  }
export default EshramNew ;