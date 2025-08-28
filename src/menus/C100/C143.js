import React, { useState, useEffect } from "react";
import "./home.css";
import siteData from "../../sitedata.json";  // Load icon paths from JSON

// Backend API URL
const url = "http://10.72.46.57:5000/api/p2c143";

function C143() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log("✅ Rewards data from backend:", json);

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
        console.error("❌ Error fetching rewards:", err);
        setError(err.message);
        setDataIsLoaded(true);
      });
  }, []);

  if (!dataIsLoaded) {
    return (
      <section className="reward">
        <div className="text-start text-white m-2 py-3">
          <h3 id="h11">
            <i className="fa fa-trophy" aria-hidden="true" id="icon" />
            Loading Rewards...
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

  // Load reward icon from siteData.json (single icon for all rewards)
  const rewardIcon = siteData.rewardIcon || "images/images/images.jpg";

  return (
    <section className="reward">
      <div className="text-start text-red m-2 py-3">
        {items.map((details, index) => (
          <div key={index}>
            <h3 className="font-weight-bold text-left" id="h11">
              <i className="fa fa-trophy" aria-hidden="true" id="icon" />
              {details.ptitle || "Untitled"}
            </h3>

            {(Array.isArray(details.a) ? details.a : []).map((e, i) => (
              <div className="card__picture2 p-1 text-left" id="tool2" key={i}>
                <div id="events">
                  <img 
                    src={`/${rewardIcon}`} 
                    alt="reward" 
                    className="reward-icon" 
                  />
                </div>
                <h6 id="covid4">
                  <a href={e.avalue || "#"} target="_blank" rel="noopener noreferrer">
                    {e.aname || "No title"}
                  </a>
                </h6>
                <p id="para3">{e.aname || ""}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default C143;
