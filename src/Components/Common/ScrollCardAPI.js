import React, { useEffect, useState } from "react";
import "./ScrollCard.css";

function ScrollCardAPI({ apiUrl, title }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.a && Array.isArray(data.a)) {
          setItems(data.a);
        } else {
          setItems([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) return <p>Loading {title}...</p>;
  if (error) return <p>Error loading {title}: {error.message}</p>;

  return (
    <div className="scroll-card">
      <h3>{title}</h3>
      <div className="scroll-list">
        {items.map((item) => (
          <a
            key={item._id.$oid}
            href={item.avalue}
            target="_blank"
            rel="noopener noreferrer"
            className="scroll-item"
          >
            {item.aname}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ScrollCardAPI;
