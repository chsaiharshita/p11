// src/components/RewardsList.js
import React, { useEffect, useState } from "react";
import rewardIcon from "../../images/images.jpg"; // update icon path if different
import "./RewardsList.css";

function C503() {
  const [rewardsData, setRewardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://10.72.46.57:5000/api/p2c143") // replace with actual API
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
            <img src={rewardIcon} alt="reward" className="reward-icon" />
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
