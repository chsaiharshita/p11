import React, { useState, useEffect } from "react";
import "./home.css";
import siteData from "../../sitedata.json"; 
import C136 from "../Common/C136"; 

function C141() {
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(siteData.P0url1)
      .then(res => res.json())
      .then(json => setAnnouncement(json || null))
      .catch(err => {
        console.error("Failed to fetch announcements:", err);
        setAnnouncement({ error: "Internal Server Error" });
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="container text-white py-3">
        <h3>
          <i className="fa fa-bullhorn" aria-hidden="true" /> Loading Announcements...
        </h3>
      </div>
    );
  }

  if (!announcement || !announcement.a || announcement.a.length === 0) {
    return (
      <div className="container text-warning py-3">
        <h3>
          <i className="fa fa-bullhorn" aria-hidden="true" /> 
          {announcement?.error || "No announcements available"}
        </h3>
      </div>
    );
  }

  // ✅ Call reusable component
  return (
    <div className="test">
      <C136
        title={announcement.ptitle || "Announcements"}
        data={announcement.a}
      />
    </div>
  );
}

export default C141;
