// src/components/EventsList.js
import React, { useEffect, useState } from "react";
import "./EventsList.css";
import eventIcon from "../../images/Events1.png";

function C502() {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://10.72.46.62/api/iti/p2c142") // replace with actual API
      .then(res => res.json())
      .then(data => {
        setEventsData(Array.isArray(data) ? data : [data]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch events:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

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
            <img src={eventIcon} alt="event" className="event-icon" />
            <div className="event-content">
              <h4 className="event-title">{event.pname}</h4>

              {Array.isArray(event.a) ? (
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
