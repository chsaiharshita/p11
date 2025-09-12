import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import siteData from "../../sitedata.json";

function C1411() {
  const { pname } = useParams(); // Get pname from URL
  const [details, setDetails] = useState(null);
  const [icon, setIcon] = useState("");   // ✅ single icon string
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // ✅ Load single news icon from siteData.json
    if (siteData.newsIcons?.img) {
      setIcon(siteData.newsIcons.img);
    }

    // ✅ Fetch details dynamically
    fetch(siteData.P0url4)
      .then(async (response) => {
        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.error || `HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => setDetails(json))
      .catch((error) => setDetails({ error: error.message }))
      .finally(() => setLoading(false));
  }, [pname]);

  if (loading) return <p>Loading news...</p>;
  if (!details || details.error)
    return <p style={{ color: "red" }}>{details?.error || "No details found"}</p>;

  return (
    <div className="news-wrapper">
      <h2 className="news-heading">{details.ptitle || "No Title"}</h2>

      {Array.isArray(details.a) && details.a.length > 0 ? (
        details.a.map((item, index) => (
          <div key={index} className="news-card">
            {/* ✅ Same icon for all news items */}
            {icon && (
              <div className="about-img-container">
                <img
                  src={icon}
                  alt={details.pname || "news"}
                  className="about-sub-img"
                />
              </div>
            )}
            <div className="news-content">
              <strong className="news-title">{item.aname || "No Name"}</strong>
              {item.adesc && <p className="news-desc">{item.adesc}</p>}
            </div>
          </div>
        ))
      ) : (
        <p>No Description</p>
      )}

      <div className="news-back">
        <Link to="/">⬅ Back to Home</Link>
      </div>
    </div>
  );
}

export default C1411;
