import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Slide from "../menus/Menu1/Slide.js";
import "./layout.css";
import routeConfig from "./routeConfig.js";
import ModalDialog from "./ModalDailog.js";


function Layout() {
  return (
    <React.Fragment> 
     <div>
       <Switch>
        <Route exact path="/" >
          <Slide />
          <ModalDialog />
         </Route>
        {routeConfig.map((route, i) => (
          <Route key={route} {...route} />
        ))}
      </Switch>
      </div>
      </React.Fragment>
  );
}

export default Layout;
