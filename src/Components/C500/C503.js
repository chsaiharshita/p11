import React, { useEffect, useState } from "react";
import siteData from "../../sitedata.json";
import "./C503.css";

function C503() {
  const [rewardsData, setRewardsData] = useState([]);
  const [icon, setIcon] = useState(""); // single icon string
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // ✅ Rewards icon load from sitedata
    if (siteData.rewardsIcons?.img) {
      setIcon(siteData.rewardsIcons.img);
    }

    // ✅ Fetch rewards API
    fetch(siteData.P0url3)
      .then((res) => res.json())
      .then((data) => {
        setRewardsData(Array.isArray(data) ? data : [data]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch rewards:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  const cleanValue = (val) => {
    if (!val) return "";
    const trimmed = val.trim();
    return trimmed.toLowerCase() === "null" ? "" : trimmed;
  };

  return (
    <div className="rewards-container">
      <h3>Rewards & Achievements</h3>
      <div className="rewards-list">
        {rewardsData.map((reward, index) => (
          <div key={index} className="reward-card">
            {/* ✅ Show same reward icon for all cards */}
            {icon && (
              <img
                src={icon}
                alt="reward"
                className="reward-icon"
              />
            )}

            <div className="reward-content">
              {/* Removed reward.pname completely */}
              {Array.isArray(reward.a) ? (
                reward.a.map((item, i) => {
                  const name = cleanValue(item.aname);
                  const value = cleanValue(item.avalue);
                  return (
                    (name || value) && (
                      <p key={i}>
                        <strong>{name}</strong>
                         <a href={item.avalue || "#"} target="_blank" rel="noopener noreferrer">
                    {item.aname || "No title"}
                  </a>
                      </p>
                    )
                  );
                })
              ) : (
                (() => {
                  const name = cleanValue(reward.a?.aname);
                  const value = cleanValue(reward.a?.avalue);
                  return (
                    (name || value) && (
                      <p>
                        <strong>{name}</strong>
                        {value ? ` – ${value}` : ""}
                      </p>
                    )
                  );
                })()
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default C503;
