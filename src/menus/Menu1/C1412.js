import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import newsIcon from "../../images/OIP.jpeg";

function AnnouncementDetail() {
  const { id } = useParams(); // Get the ID from URL
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://10.72.46.57:5000/api/iti/p2c1412`)
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
  }, [id]); // Refetch when ID changes

  if (loading) return <p>Loading news...</p>;
  if (!details || details.error) return <p style={{ color: "red" }}>{details?.error || "No details found"}</p>;

  return (
    <div className="news-wrapper">
      <h2 className="news-heading">{details.ptitle || "No Title"}</h2>

      {Array.isArray(details.a) && details.a.length > 0 ? (
        details.a.map((item, index) => (
          <div key={index} className="news-card">
        <img src={newsIcon} alt="news" className="news-icon" />
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

export default AnnouncementDetail;
