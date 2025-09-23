// src/components/C501.js
import React, { useEffect, useState } from "react";
import "./C501.css";
import siteData from "../../sitedata.json";

function C501() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(siteData.P0url4).then((res) => res.json()),
      fetch(siteData.P0url5).then((res) => res.json())
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
    <div id="news-section" className="no-padding">
      {/* Heading flush-left */}
      <h3 className="news-heading">Announcements - News</h3>

      <div className="news-list">
        {newsData.map((news, index) => {
          const mappedData = {};
          if (Array.isArray(news.a)) {
            news.a.forEach((item) => {
              if (item.aname && item.avalue) {
                mappedData[item.aname.toLowerCase()] = item.avalue;
              }
            });
          }

          return (
            <div key={index} className="news-card">
              {/* News Icon */}
              {siteData.newsIcons?.img && (
                <div className="news-icon">
                  <img
                    src={siteData.newsIcons.img}
                    alt={mappedData.title || "news"}
                    className="news-icon-img"
                  />
                </div>
              )}

              {/* News Content */}
              <div className="news-details">
                <h4 className="news-title">{mappedData.title || "No Title"}</h4>

                {mappedData.date && (
                  <p className="news-date">DATE: {mappedData.date}</p>
                )}

                {mappedData.details && (
                  <p className="news-desc">{mappedData.details}</p>
                )}

                {mappedData.pdf_link && (
                  <a
                    href={mappedData.pdf_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="news-link"
                  >
                    📄 View Document
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default C501;
