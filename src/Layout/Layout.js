// src/components/Layout.js
import React from "react";
import { Switch, Route } from "react-router-dom";
import routesConfig from "./routeConfig";
import Slide from "../menus/Menu1/Slide";
import AnnouncementDetails from "../menus/Menu1/AnnouncementDetails";
import AnnouncementDetail from "../menus/Menu1/NEWS2";
import NewsList from "../menus/Menu1/NewsList";
function Layout() {
  return (
    <div>
      <Switch>
        {/* Home */}
        <Route exact path="/" component={Slide} />
          <Route exact path="/news" component={NewsList} />
        {/* News Details Page */}
        <Route path="/:pname" component={AnnouncementDetails} />

        {/* Skill Development or other updates */}
        <Route path="/:pname" component={AnnouncementDetail} />

        {/* Other Static or Dynamic Routes */}
        {routesConfig.map((route, i) => (
          <Route key={i} path={route.path} component={route.component} />
        ))}

        {/* 404 Fallback (Optional) */}
        <Route render={() => <h2>Page Not Found</h2>} />
      </Switch>
    </div>
  );
}

export default Layout;
