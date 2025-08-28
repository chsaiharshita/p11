// src/components/EventsList.js
import React, { useEffect, useState } from "react";
import "./EventsList.css";
import siteData from "../../sitedata.json";

function C502() {
  const [eventsData, setEventsData] = useState([]);
  const [icons, setIcons] = useState([]);  // <-- store event icons from siteData
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Load icons from siteData.json
    setIcons(siteData.eventsIcons || []);  // <-- must be an array in JSON

    // Fetch events dynamically
    fetch("http://10.72.46.57:5000/api/p2c142")
      .then(async (res) => {
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.error || `HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setEventsData(Array.isArray(data) ? data : [data]);
      })
      .catch((err) => {
        console.error("Failed to fetch events:", err);
        setEventsData([{ error: err.message }]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (!eventsData || (eventsData[0] && eventsData[0].error))
    return <p style={{ color: "red" }}>{eventsData[0]?.error || "No events found"}</p>;

  const cleanValue = (val) => {
    if (!val) return "";
    const trimmed = val.trim();
    return trimmed.toLowerCase() === "null" ? "" : trimmed;
  };

  return (
    <div className="events-container">
      <h3>Upcoming Events</h3>
      <div className="events-list">
        {eventsData.map((event, index) => (
          <div key={index} className="event-card">
            {icons[index] && (
              <div className="event-img-container">
                <img
                  src={`/${icons[index]}`}   // <-- dynamic image
                  alt={event.pname || "event"}
                  className="event-icon"
                />
              </div>
            )}
            <div className="event-content">
              <h4 className="event-title">{event.pname || "No Title"}</h4>

              {Array.isArray(event.a) && event.a.length > 0 ? (
                event.a.map((item, i) => {
                  const name = cleanValue(item.aname);
                  const value = cleanValue(item.avalue);
                  return (name || value) && (
                    <p key={i}>
                      <strong>{name}</strong>
                      {value ? ` – ${value}` : ""}
                    </p>
                  );
                })
              ) : (
                (() => {
                  const name = cleanValue(event.a?.aname);
                  const value = cleanValue(event.a?.avalue);
                  return (name || value) && (
                    <p>
                      <strong>{name}</strong>
                      {value ? ` – ${value}` : ""}
                    </p>
                  );
                })()
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default C502;
