import React from "react";
import { Switch, Route } from "react-router-dom";
import routesConfig from "./routeConfig";
import Slide from "../menus/C100/Slide";

function Layout() {
  return (
    <div>
      <Switch>
        {/* Home */}
        <Route exact path="/" component={Slide} />

        {/* Static routes first */}
        {routesConfig.map((route, i) => (
          <Route key={i} exact path={route.path} component={route.component} />
        ))}



        {/* Dynamic routes */}
        
        {/* 404 fallback */}
        <Route render={() => <h2>Page Not Found</h2>} />
      </Switch>
    </div>
  );
}

export default Layout;
