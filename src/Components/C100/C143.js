import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import siteData from "../../sitedata.json";

function C143() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(siteData.P11url10)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then((json) => {
        console.log("Rewards API Response:", json); // 👈 debug
        if (Array.isArray(json)) {
          setItems(json);
        } else if (json && Array.isArray(json.a)) {
          setItems([{ ptitle: json.ptitle || "Untitled", a: json.a }]);
        } else {
          setItems([]);
        }
        setDataIsLoaded(true);
      })
      .catch((err) => {
        setError(err.message);
        setDataIsLoaded(true);
      });
  }, []);

  if (!dataIsLoaded) {
    return (
      <section className="reward">
        <div className="text-start text-white m-2 py-3">
          <h3 id="h11">
            <i className="fa fa-trophy" aria-hidden="true" id="icon" /> Loading Rewards...
          </h3>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="reward">
        <div className="text-danger m-2 py-3">
          <h3>{error}</h3>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="reward">
        <div className="text-warning m-2 py-3">
          <h3>No rewards available.</h3>
        </div>
      </section>
    );
  }

  return (
    <div className="reward">
      <div className="text-start text-red m-2 py-3">
        {items.map((details, index) => (
          <div key={index}>
            <h3 className="font-weight-bold text-left" id="h11">
              <i className="fa fa-trophy" aria-hidden="true" id="icon" />{" "}
              {details.ptitle || "Untitled"}
            </h3>

            {/* Show only first 2 rewards */}
            {(Array.isArray(details.a) ? details.a.slice(0, 2) : []).map((e, i) => (
              <div
                className="card__picture2 p-1 text-left"
                id="tool2"
                key={i}
                style={{ cursor: "pointer" }}
              >
                <div id="events">
                  <img
                    src={siteData.rewardsIcons.img}
                    alt="reward"
                    className="reward-icon"
                  />
                </div>

                <h6 id="covid4">
                  <Link to="/nicapsc-kkdpolice/node168" className="text-primary">
                    {e.aname || "No title"}
                  </Link>
                </h6>

                <p id="para3">{e.aname || ""}</p>
              </div>
            ))}

            {/* ✅ Always show View More */}
            <div className="text-center mt-3">
              <Link to="" className="btn btn-primary">
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default C143;