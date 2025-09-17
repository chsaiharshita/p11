// src/Components/C500/C502.js
import React, { useEffect, useState } from "react";
import "./C502.css";
import siteData from "../../sitedata.json";

function C502() {
  const [eventsData, setEventsData] = useState([]);
  const [icons, setIcons] = useState([]); // event icons from siteData
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // ✅ Load icons from siteData
    if (Array.isArray(siteData.eventsIcons)) {
      setIcons(siteData.eventsIcons.map((i) => i.img));
    } else if (siteData.eventsIcons?.img) {
      setIcons([siteData.eventsIcons.img]); // fallback for single image
    }

    // ✅ Fetch events dynamically
    fetch(siteData.P0url2)
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
            {/* ✅ Event Icon from sitedata */}
            {icons[index % icons.length] && (
              <div className="event-img-container">
                <img
                  src={icons[index % icons.length]}
                  alt="event icon"
                  className="card__img2"
                />
              </div>
            )}

            <div className="event-content">
              {/* Removed event.pname completely */}
              {Array.isArray(event.a) && event.a.length > 0 ? (
                event.a.map((item, i) => {
                  const name = cleanValue(item.aname);
                  const value = cleanValue(item.avalue);
                  return (
                    (name || value) && (
                      <p key={i}>
                        <strong>{name}</strong>
                        <a href={item.avalue || "#"} target="_blank" rel="noopener noreferrer">
                                            {item.aname || "No title"}
                                          </a>
                      </p>
                    )
                  );
                })
              ) : (
                (() => {
                  const name = cleanValue(event.a?.aname);
                  const value = cleanValue(event.a?.avalue);
                  return (
                    (name || value) && (
                      <p>
                        <strong>{name}</strong>
                        {value ? ` – ${value}` : ""}
                      </p>
                    )
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
