// src/components/NewsList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://10.72.46.57:5000/api/iti")
      .then(async (res) => {
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.error || `HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // Filter only p2c1411 and p2c1412 records
        const filtered = data.filter(item =>
          item.pname === "p2c1411" || item.pname === "p2c1412"
        );
        setNews(filtered);
      })
      .catch(err => {
        console.error("Error fetching news:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h3>Loading news...</h3>;
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;
  if (!news.length) return <h3>No news available</h3>;

  return (
    <div className="container py-3">
      <h2>News</h2>
      {news.map(item => (
        <div 
          key={item.pname} 
          style={{
            border: "1px solid #ccc", 
            padding: "10px", 
            marginBottom: "10px"
          }}
        >
          <p><strong>Publish Name :</strong> {item.pname}</p>
          <h4>{item.a}</h4>
          <p>{item.ptitle}</p>
          <Link to={`/news/${item.pname}`}>
            <button>Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
