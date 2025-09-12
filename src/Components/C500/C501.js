// src/components/NewsList.js
import React, { useEffect, useState } from "react";
import "./C501.css";
import siteData from "../../sitedata.json";  // Import JSON directly from src

function C501() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(siteData.P0url6).then((res) => res.json()),
      fetch(siteData.P0url7).then((res) => res.json())
    ])
      .then(([news1, news2]) => {
        setNewsData([news1, news2]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
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
            {/* ✅ Use single icon from siteData */}
            {siteData.newsIcons?.img && (
              <div className="about-img-container">
                <img
                  src={siteData.newsIcons.img}
                  alt="news"
                  className="about-sub-img"
                />
              </div>
            )}
            <div className="news-content">
              {Array.isArray(news.a) ? (
                news.a.map((item, i) => (
                  <p key={i}>
                    <strong>{item.aname}</strong>
                    {item.avalue ? ` – ${item.avalue}` : ""}
                  </p>
                ))
              ) : (
                (news.a?.aname || news.a?.avalue) && (
                  <p>
                    <strong>{news.a?.aname}</strong>
                    {news.a?.avalue ? ` – ${news.a?.avalue}` : ""}
                  </p>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default C501;
