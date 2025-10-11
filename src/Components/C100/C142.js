import React, { useState, useEffect } from "react";
import "./home.css";
import C143 from "./C143.js";
import siteData from "../../sitedata.json";
import { Link } from "react-router-dom";

function C142() {
  const [data, setData] = useState(null);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (window.location.hash === "#rewards") {
      const rewardsSection = document.getElementById("rewardsSection");
      if (rewardsSection) {
        rewardsSection.scrollIntoView({ behavior: "smooth" });
      }
    }

    fetch(siteData.P11url9)
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then((json) => {
        console.log("✅ Event data from backend:", json);
        setData(json);
        setDataIsLoaded(true);
      })
      .catch((err) => {
        console.error("❌ Error fetching events:", err);
        setError(err.message);
        setDataIsLoaded(true);
      });
  }, []);

  const renderEvents = () => {
    if (error) {
      return (
        <div className="text-danger py-3">
          <h4>
            <i className="fa fa-exclamation-triangle" aria-hidden="true" />{" "}
            Failed to load events: {error}
          </h4>
        </div>
      );
    }

    if (!dataIsLoaded) {
      return (
        <div className="py-3">
          <h3 id="h10">
            <i
              className="fa fa-calendar-check-o"
              aria-hidden="true"
              id="icon"
            />{" "}
            Loading Events...
          </h3>
        </div>
      );
    }

    if (!data || !data.a || data.a.length === 0) {
      return (
        <div className="text-warning py-3">
          <h4>
            <i className="fa fa-calendar-check-o" aria-hidden="true" /> No events
            found.
          </h4>
        </div>
      );
    }

    return (
      <div className="w-100 text-start py-3">
        <h3 className="font-weight-bold text-left" id="h10">
          <i
            className="fa fa-calendar-check-o"
            aria-hidden="true"
            id="icon"
          />{" "}
          {data.ptitle || "Upcoming Events"}
        </h3>

        {data.a.slice(0, 2).map((e, j) => (
          <div
            className="card__picture2 p-1 text-left mb-2"
            id="tool"
            key={`event-${j}`}
          >
            <div id="events">
              <img
                src={siteData.eventsIcons.img}
                alt={e.aname || "event image"}
                className="card__img2"
              />
            </div>
            <h6 id="covid4">
              <Link
                to="/nicapsc-kkdpolice/node169"
                className="text-primary"
              >
                {e.aname || "No title"}
              </Link>
            </h6>
            <p id="para3">{e.aname || ""}</p>
          </div>
        ))}

        {data.a.length > 2 && (
          <div className="text-center mt-3">
            <Link to="/nicapsc-kkdpolice/node169" className="btn btn-primary">
              View More
            </Link>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="updates py-4">
      <div className="container">
        {/* Use Bootstrap grid system for side-by-side layout */}
        <div className="row g-4 align-items-start">
          {/* Left column — Events */}
          <div className="col-md-6">{renderEvents()}</div>

          {/* Right column — Rewards */}
          <div className="col-md-6" id="rewardsSection">
            <div className="w-100">
              <C143 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default C142;
