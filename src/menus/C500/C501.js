// src/components/NewsList.js
import React, { useEffect, useState } from "react";
import "./NewsList.css";
import newsIcon from "../../images/OIP.jpeg";

function C501() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("http://10.72.46.57:5000/api/p2c1411").then(res => res.json()),
      fetch("http://10.72.46.57:5000/api/p2c1412").then(res => res.json())
    ])
      .then(([news1, news2]) => {
        setNewsData([news1, news2]); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch news:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="news-container">
      <h3>Announcements - News</h3>
      <div className="news-list">
        {newsData.map((news, index) => (
          <div key={index} className="news-card">
            <img src={newsIcon} alt="news" className="news-icon" />
            <div className="news-content">
              <h4 className="news-title">{news.pname}</h4>
              {Array.isArray(news.a) ? (
                news.a.map((item, i) => (
                  <p key={i}>
                    <strong>{item.aname}</strong> – {item.avalue}
                  </p>
                ))
              ) : (
                <p>
                  <strong>{news.a?.aname}</strong> – {news.a?.avalue}
                </p>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default C501;
