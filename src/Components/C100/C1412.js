import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import siteData from "../../sitedata.json";

function C1412() {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [icon, setIcon] = useState("");

  useEffect(() => {
    setLoading(true);

    // ✅ Load news icon from siteData.json
    if (siteData.newsIcons?.img) {
      setIcon(siteData.newsIcons.img);
    }

    // ✅ Fetch from backend (URL already has pname)
    fetch(siteData.P0url5)
      .then(async (response) => {
        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(
            errData.error || `HTTP error! Status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((json) => setDetails(json))
      .catch((error) => setDetails({ error: error.message }))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (!details || details.error)
    return (
      <p style={{ color: "red" }}>
        {details?.error || "No news details found"}
      </p>
    );

  // ✅ Convert `a` array into object {title, date, pdf_link, details}
  const mappedData = {};
  if (Array.isArray(details.a)) {
    details.a.forEach((item) => {
      if (item.aname && item.avalue) {
        mappedData[item.aname] = item.avalue;
      }
    });
  }

  return (
    <div className="news-wrapper">
      <div className="news-card">
        {/* Left: Icon */}
        {icon && (
          <div className="about-img-container">
            <img
              src={icon}
              alt={mappedData.title || "news"}
              className="about-sub-img"
            />
          </div>
        )}

        {/* Right: News Content */}
        <div className="news-content">
          {/* Title */}
          <h2 className="news-heading">{mappedData.title || "No Title"}</h2>

          {/* Date */}
          {mappedData.date && (
            <p className="news-date">DATE: {mappedData.date}</p>
          )}

          {/* Details */}
          {mappedData.details && (
            <p className="news-desc">{mappedData.details}</p>
          )}

          {/* PDF Link */}
          {mappedData.pdf_link && (
            <p className="news-link">
              📄{" "}
              <a
                href={mappedData.pdf_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Document
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Back Button */}
      <div className="news-back">
        <Link to="/">⬅ Back to Home</Link>
      </div>
    </div>
  );
}

export default C1412;
