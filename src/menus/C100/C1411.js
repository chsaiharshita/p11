import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import siteData from "../../sitedata.json";

function C1411() {
  const { pname } = useParams(); // Get pname from URL
  const [details, setDetails] = useState(null);
  const [icons, setIcons] = useState([]);  // <-- added this
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Load icons from siteData.json
    setIcons(siteData.newsIcons || []);  // <-- added this

    // Fetch details dynamically
    fetch(`http://10.72.46.57:5000/api/p2c1411`)
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
            {icons[index] && (
              <div className="about-img-container">
                <img 
                  src={`/${icons[index]}`} 
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
