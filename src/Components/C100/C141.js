import React, { useState, useEffect } from "react";
import "./home.css";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import siteData from "../../sitedata.json"; 

function C141() {
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(siteData.P0url1)
      .then(res => res.json())
      .then(json => setAnnouncement(json || null))
      .catch(err => {
        console.error("Failed to fetch announcements:", err);
        setAnnouncement({ error: "Internal Server Error" });
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="container text-white py-3">
        <h3>
          <i className="fa fa-bullhorn" aria-hidden="true" id="icon" /> Loading Announcements...
        </h3>
      </div>
    );
  }

  if (!announcement || !announcement.a || announcement.a.length === 0) {
    return (
      <div className="container text-warning py-3">
        <h3>
          <i className="fa fa-bullhorn" aria-hidden="true" id="icon" /> 
          {announcement?.error || "No announcements available"}
        </h3>
      </div>
    );
  }

  return (
    <div className="test">
      <section className="container" id="latest">
        <div className="announcements row d-lg-block">
          <h3
            className="announcements__text col-xs-8 col-lg-2 col-md-12 col-sm-12 text-center"
            id="announcements"
          >
            {announcement.ptitle || "Announcements"}
          </h3>

          <Marquee
            className="col-xs-8 col-lg-10 col-md-12 col-sm-12"
            pauseOnHover
            direction="left"
            speed={30}
          >
            {announcement.a.map((e, i) => {
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
    </div>
  );
}

export default C141;
