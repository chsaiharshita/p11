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
        console.log("🏆 Rewards API Response:", json);
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

  // LOADING STATE
  if (!dataIsLoaded) {
    return (
      <div className="reward py-3">
        <h3 id="h11">
          <i className="fa fa-trophy" aria-hidden="true" id="icon" /> Loading Rewards...
        </h3>
      </div>
    );
  }

  // ERROR STATE
  if (error) {
    return (
      <div className="reward py-3 text-danger">
        <h4>
          <i className="fa fa-exclamation-triangle" aria-hidden="true" /> {error}
        </h4>
      </div>
    );
  }

  // NO DATA STATE
  if (items.length === 0) {
    return (
      <div className="reward py-3 text-warning">
        <h4>
          <i className="fa fa-trophy" aria-hidden="true" /> No rewards available.
        </h4>
      </div>
    );
  }

  // MAIN UI
  return (
    <div className="reward text-start py-3">
      {items.map((details, index) => (
        <div key={index}>
          <h3 className="font-weight-bold text-left mb-3" id="h11">
            <i className="fa fa-trophy" aria-hidden="true" id="icon" />{" "}
            {details.ptitle || "Rewards"}
          </h3>

          {(Array.isArray(details.a) ? details.a.slice(0, 2) : []).map((e, i) => (
            <div
              className="card__picture2 p-1 text-left mb-2"
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

          {/* ✅ View More button */}
          {details.a && details.a.length > 2 && (
            <div className="text-center mt-3">
              <Link to="/nicapsc-kkdpolice/node168" className="btn btn-primary">
                View More
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default C143;
