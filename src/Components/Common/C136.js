// src/components/ScrollingAnnouncements.js
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
 // optional styling

function C136({ title = "Announcements", data = [] }) {
  if (!data || data.length === 0) {
    return (
      <div className="container text-warning py-3">
        <h3>
          <i className="fa fa-bullhorn" aria-hidden="true" /> 
          No announcements available
        </h3>
      </div>
    );
  }

  return (
    <section className="container" id="latest">
      <div className="announcements row d-lg-block">
        <h3
          className="announcements__text col-xs-8 col-lg-2 col-md-12 col-sm-12 text-center"
          id="announcements"
        >
          {title}
        </h3>

        <Marquee
          className="col-xs-8 col-lg-10 col-md-12 col-sm-12"
          pauseOnHover
          direction="left"
          speed={30}
        >
          {data.map((e, i) => {
            const cleanPath = (e.avalue || "")
              .toString()
              .replace(/^['"]|['"]$/g, "")
              .replace(/^\/+|\/+$/g, "");

            return (
              <p className="announcements__list" key={i}>
                <Link to={`/${cleanPath}`}>{e.aname || "Untitled"}</Link>
              </p>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}

export default C136;
