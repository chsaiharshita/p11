import React from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import "./Breadcrumb.css";

function PureBreadcrumbs({ breadcrumbs }) {
  return (
    <div className="container">
    <ul className="breadcrumbslist  p-2">
      <ul className="" style={{}}  >
      <a href="#" id="link">Home</a>
      </ul>
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <>
         <React.Fragment>
          <ul className="navlink-active " key={match.url}>
            <Link className="" to={match.url || ""}>{breadcrumb}</Link>
            <span className="lists_space">{index < breadcrumbs.length - 1 && "  "}</span>
          </ul>
          </React.Fragment>
        </>
      ))}

    </ul>
    </div>
  );
}
export default withBreadcrumbs()(PureBreadcrumbs); 





