// src/components/EventsList.js
import React, { useEffect, useState } from "react";
import eventIcon from "../../images/Events1.png";
import "./EventsList.css";
function parseEventString(aInput) {
  if (!aInput) return [];

  // If already array of objects
  if (Array.isArray(aInput)) {
    return aInput.map(item => ({
      aname: item.aname || "",
      avalue: item.avalue || ""
    }));
  }

  // If object, convert to string
  const aString = typeof aInput === "string" ? aInput : JSON.stringify(aInput);

  return aString
    .split("aname:")
    .filter(part => part.trim() !== "")
    .map(part => {
      const [anamePart, avaluePart] = part.split("|avalue:");
      return {
        aname: anamePart ? anamePart.trim() : "",
        avalue: avaluePart && avaluePart.trim() !== "null" ? avaluePart.trim() : ""
      };
    });
}

function EventsList() {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://10.72.46.57:5000/api/iti/p2c142")  // <-- replace with your actual events API
      .then(res => res.json())
      .then(data => {
        console.log("Raw events data:", data); // debug line
        setEventsData(Array.isArray(data) ? data : [data]);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch events:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="events-container">
      <h3>Upcoming Events</h3>
      <div className="events-list">
        {eventsData.map((event, index) => {
          const parsedEvents = parseEventString(event.a);
          return (
            <div key={index} className="event-card">
              <img src={eventIcon} alt="event" className="event-icon" />
              <div className="event-content">
                <h4 className="event-title">{event.pname}</h4>
                {parsedEvents.map((item, i) => (
                  <p key={i}>
                    <strong>{item.aname}</strong>
                    {item.avalue ? ` – ${item.avalue}` : ""}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EventsList;
