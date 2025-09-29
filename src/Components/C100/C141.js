/*
import React, { useState, useEffect } from "react";
import "./home.css";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom"; // ✅ Import Link
import siteData from "../../sitedata.json"; 

function C141() {
  const [announcement, setAnnouncement] = useState(null);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    fetch(siteData.P0url1)
      .then(async (response) => {
        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.error || `HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log("✅ Announcements from backend:", json);
        setAnnouncement(json || null);
      })
      .catch((error) => {
        console.error("Backend error:", error.message);
        setAnnouncement({ error: error.message || "Internal Server Error" });
      })
      .finally(() => setDataIsLoaded(true));
  }, []);

  if (!dataIsLoaded) {
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
          <i className="fa fa-bullhorn" aria-hidden="true" id="icon" /> {announcement.error}
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
            {announcement.ptitle || "Untitled"}
          </h3>

          <Marquee
            className="col-xs-8 col-lg-10 col-md-12 col-sm-12"
            pauseOnHover
            direction="left"
            speed={30}
          >
            {announcement.a.map((e, i) => {
              // Remove quotes & extra slashes
              const cleanPath = e.avalue
                ?.toString()
                .replace(/^['"]|['"]$/g, "")
                .replace(/^\/+|\/+$/g, "");

              return (
                <p className="announcements__list" key={`link-${i}`}>
                  <Link to={`/${cleanPath}`}>
                    {e.aname || "No title"}
                  </Link>
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
*/
import React from "react";
import "./home.css";
import Marquee from "react-fast-marquee";
import siteData from "../../sitedata.json";

function C141() {
  const announcement = siteData?.Announcements;

  if (!announcement || !announcement.a || announcement.a.length === 0) {
    return (
      <div className="container text-warning py-3">
        <h3>
          <i className="fa fa-bullhorn" aria-hidden="true" id="icon" /> No Announcements Found
        </h3>
      </div>
    );
  }

  return (
    <div className="test">
      <section className="container bg-white text-red py-2" id="latest">
        <div className="announcements row d-lg-block">
           <div style={{ margin: "0 auto" }}>
          <Marquee
            
            pauseOnHover
            direction="left"
            speed={60}
             className="w-120" 
             
          
          >
            {announcement.a.map((e, i) => (
              <span key={i} className="announcements__list px-3"  style={{ color: "red" }}  >
                {e.aname}
              </span>
            ))}
          </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
}

export default C141;