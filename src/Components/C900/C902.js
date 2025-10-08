// src/Components/C500/C502.js
import React, { useEffect, useState } from "react";
import "./C902.css";
import siteData from "../../sitedata.json";

function C902() {
  const [eventsData, setEventsData] = useState([]);
  const [icons, setIcons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Load icons from siteData
    if (Array.isArray(siteData.eventsIcons)) {
      setIcons(siteData.eventsIcons.map((i) => i.img));
    } else if (siteData.eventsIcons?.img) {
      setIcons([siteData.eventsIcons.img]);
    }

    // Fetch events dynamically
    fetch(siteData.P11url9)
      .then(async (res) => {
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.error || `HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // Flatten each item in `a` into its own event card
        let eventsArray = [];
        const rawEvents = Array.isArray(data) ? data : [data];
        rawEvents.forEach((event) => {
          if (Array.isArray(event.a)) {
            event.a.forEach((item) => {
              eventsArray.push({
                title: item.aname || event.title || "No Title",
                date: event.date || "",
                content: item.details || "", // if your API has details
                pdf_link: item.avalue || "",
              });
            });
          } else {
            eventsArray.push({
              title: event.a?.aname || event.title || "No Title",
              date: event.date || "",
              content: event.a?.details || "",
              pdf_link: event.a?.avalue || "",
            });
          }
        });

        setEventsData(eventsArray);
      })
      .catch((err) => {
        console.error("Failed to fetch events:", err);
        setEventsData([{ error: err.message }]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (!eventsData.length || (eventsData[0] && eventsData[0].error))
    return <p style={{ color: "red" }}>{eventsData[0]?.error || "No events found"}</p>;

  return (
    <div className="events-container">
      <h3>Upcoming Events</h3>
      <div className="events-list">
        {eventsData.map((event, index) => (
          <div key={index} className="event-card">
            {/* Event Icon */}
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
              {/* Event title & date */}
              <h4 className="event-title">{event.title}</h4>
              {event.date && <p className="event-date">DATE: {event.date}</p>}

              {/* Event content */}
              {event.content && <p className="event-desc">{event.content}</p>}

              {/* PDF link */}
              {event.pdf_link && (
                <p className="event-link">
                  📄{" "}
                  <a href={event.pdf_link} target="_blank" rel="noopener noreferrer">
                    View Document
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default C902;