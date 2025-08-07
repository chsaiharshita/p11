import React, { useState, useEffect } from "react";
import "./home.css";
import Newsapi from "./C143.js";

const url = "http://10.72.46.57:5000/api/p2c142"; // Update IP if needed

function Api() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("✅ Event data from backend:", json);
        setItems(json);
        setDataIsLoaded(true);
      })
      .catch((error) => {
        console.error("❌ Error fetching events:", error);
      });
  }, []);

  if (!dataIsLoaded) {
    return (
      <section className="updates">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-start text-white m-2 py-3">
              <h3 id="h10">
                <i className="fa fa-calendar-check-o" aria-hidden="true" id="icon" />
                Loading Events...
              </h3>
            </div>
            <div className="col-lg-6">
              <Newsapi />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="updates">
      <div className="container">
        <div className="row">
          {/* Events Section */}
          <div className="col-md-6">
            <div className="text-start text-red m-2 py-3">
              {items.map((details, i) => (
                <React.Fragment key={i}>
                  <h3 className="font-weight-bold text-left" id="h10">
                    <i className="fa fa-calendar-check-o" aria-hidden="true" id="icon" />
                    {details.ptitle}
                  </h3>

                  {details.a?.map((e, j) => (
                    <div className="card__picture2 p-1 text-left" id="tool" key={j}>
                      <div id="events">
                        <img
                          src="./images/Events1.png"
                          alt={e.aname || "event image"}
                          className="card__img2"
                        />
                      </div>
                      <h6 id="covid3">
                        <a href={e.avalue} target="_blank" rel="noopener noreferrer">
                          {e.aname}
                        </a>
                      </h6>
                      <p id="para3">{e.aname}</p>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Rewards Section */}
          <div className="col-md-6">
            <Newsapi />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Api;
