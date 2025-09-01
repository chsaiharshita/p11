import React, { useEffect, useState } from "react";
import siteData from "../../sitedata.json";  // <-- import JSON instead of static image
import "./RewardsList.css";

function C503() {
  const [rewardsData, setRewardsData] = useState([]);
  const [icons, setIcons] = useState([]); // <-- added this for icons
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Load icons from siteData.json
    setIcons(siteData.rewardsIcons || []);  // <-- expects an array just like newsIcons

    fetch("http://10.72.46.62/api/p2c143")
      .then(res => res.json())
      .then(data => {
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
            {/* Show icon from siteData if available */}
            {icons[index] && (
              <img 
                src={`/${icons[index]}`} 
                alt={reward.pname || "reward"} 
                className="reward-icon" 
              />
            )}

            <div className="reward-content">
              <h4 className="reward-title">{reward.pname}</h4>
              {Array.isArray(reward.a) ? (
                reward.a.map((item, i) => {
                  const name = cleanValue(item.aname);
                  const value = cleanValue(item.avalue);
                  return (name || value) && (
                    <p key={i}>
                      <strong>{name}</strong>
                      {value ? ` – ${value}` : ""}
                    </p>
                  );
                })
              ) : (
                (() => {
                  const name = cleanValue(reward.a?.aname);
                  const value = cleanValue(reward.a?.avalue);
                  return (name || value) && (
                    <p>
                      <strong>{name}</strong>
                      {value ? ` – ${value}` : ""}
                    </p>
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
