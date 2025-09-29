import React, { useState, useEffect } from "react";
import "./home.css";
import C143 from "./C143.js";
import siteData from "../../sitedata.json"; 

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

    fetch(siteData.P0url2)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
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

  // LOADING STATE
  if (!dataIsLoaded) {
    return (
      <section className="updates">
        <div className="container">
          <div className="d-flex flex-row flex-wrap align-items-stretch w-100">
            {/* Events */}
            <div className="flex-fill me-3">
              <div className="w-100 text-start py-3">
                <h3 id="h10">
                  <i className="fa fa-calendar-check-o" aria-hidden="true" id="icon" />{" "}
                  Loading Events...
                </h3>
              </div>
            </div>
            {/* Rewards */}
            <div className="flex-fill" id="rewardsSection">
              <div className="w-100">
                <C143 />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ERROR STATE
  if (error) {
    return (
      <section className="updates">
        <div className="container">
          <div className="d-flex flex-row flex-wrap align-items-stretch w-100">
            {/* Events */}
            <div className="flex-fill me-3">
              <div className="w-100 text-danger py-3">
                <h4>
                  <i className="fa fa-exclamation-triangle" aria-hidden="true" /> 
                  Failed to load events: {error}
                </h4>
              </div>
            </div>
            {/* Rewards */}
            <div className="flex-fill" id="rewardsSection">
              <div className="w-100">
                <C143 />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // NO EVENTS STATE
  if (!data || !data.a || data.a.length === 0) {
    return (
      <section className="updates">
        <div className="container">
          <div className="d-flex flex-row flex-wrap align-items-stretch w-100">
            {/* Events */}
            <div className="flex-fill me-3">
              <div className="w-100 text-warning py-3">
                <h4>
                  <i className="fa fa-calendar-check-o" aria-hidden="true" /> 
                  No events found.
                </h4>
              </div>
            </div>
            {/* Rewards */}
            <div className="flex-fill" id="rewardsSection">
              <div className="w-100">
                <C143 />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // MAIN UI
  return (
    <section className="updates">
      <div className="container">
        <div className="d-flex flex-row flex-wrap align-items-stretch w-100">
          {/* Events Section */}
          <div className="flex-fill me-3">
            <div className="w-100 text-start py-3">
              <h3 className="font-weight-bold text-left" id="h10">
                <i className="fa fa-calendar-check-o" aria-hidden="true" id="icon" />{" "}
                {data.ptitle || "Untitled Event Section"}
              </h3>

              {data.a.map((e, j) => (
                <div className="card__picture2 p-1 text-left" id="tool" key={`event-${j}`}>
                  <div id="events">
                    <img
                      src={siteData.eventsIcons.img}
                      alt={e.aname || "event image"}
                      className="card__img2"
                    />
                  </div>
                  <h6 id="covid3">
                    <a href={e.avalue || "#"} target="_blank" rel="noopener noreferrer">
                      {e.aname || "No title"}
                    </a>
                  </h6>
                  <p id="para3">{e.aname || ""}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rewards Section */}
          <div className="flex-fill" id="rewardsSection">
            <div className="w-100">
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default C142;