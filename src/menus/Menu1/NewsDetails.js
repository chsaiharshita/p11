import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function NewsDetails() {
  const { id } = useParams(); // URL nundi ID fetch
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`http://10.72.46.57:5000/api/p2c1411/68999105660274d63a819ed9`)
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error("Error fetching news:", err));
  }, [id]);

  if (!news) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{news.ptitle}</h2>
      <p>{news.a}</p>
    </div>
  );
}

export default NewsDetails;
