import React from "react";
import { Switch, Route } from "react-router-dom";
import routesConfig from "./routeConfig";
import Slide from "../menus/Menu1/Slide";

function Layout() {
  return (
    <div>
      <Switch>
        {/* Static home route */}
        <Route exact path="/" component={Slide} />

        {/* Dynamic routes */}
        {routesConfig.map((route, i) => (
          <Route key={i} path={route.path} component={route.component} />
        ))}
      </Switch>
    </div>
  );
}

export default Layout;