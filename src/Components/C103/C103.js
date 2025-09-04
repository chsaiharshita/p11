import React from "react";
import { NavLink } from "react-router-dom";
import "./C103.css";


function C103({ to, ...rest }) {
  return (
    <>
    
    <NavLink
      {...rest}
      to={{ pathname: to, state: { breadcrumb: "reset" } }}
      activeClassName="navlink-active"
    />
    </>
  );
}

export default C103;
