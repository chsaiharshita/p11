// src/components/RewardsList.js
import React, { useEffect, useState } from "react";
import rewardIcon from "../../images/images.jpg"; // <-- update icon path if different
import "./RewardsList.css"; // <-- create CSS same as EventsList.css

function parseRewardString(aInput) {
  if (!aInput) return [];

  if (Array.isArray(aInput)) {
    return aInput.map(item => ({
      aname: item.aname || "",
      avalue: item.avalue && item.avalue.toLowerCase() !== "null"
        ? item.avalue
        : ""
    }));
  }

  const aString = typeof aInput === "string" ? aInput : JSON.stringify(aInput);

  return aString
    .split("aname:")
    .filter(part => part.trim() !== "")
    .map(part => {
      const [anamePart, avaluePart] = part.split("|avalue:");
      return {
        aname: anamePart ? anamePart.trim() : "",
        avalue: avaluePart && avaluePart.trim().toLowerCase() !== "null"
          ? avaluePart.trim()
          : ""
      };
    });
}

function C503() {
  const [rewardsData, setRewardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://10.72.46.57:5000/api/iti/p2c143")  // <-- replace with your actual rewards API
      .then(res => res.json())
      .then(data => {
        console.log("Raw rewards data:", data); // debug line
        setRewardsData(Array.isArray(data) ? data : [data]);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch rewards:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="rewards-container">
      <h3>Rewards & Achievements</h3>
      <div className="rewards-list">
        {rewardsData.map((reward, index) => {
          const parsedRewards = parseRewardString(reward.a);
          return (
            <div key={index} className="reward-card">
              <img src={rewardIcon} alt="reward" className="reward-icon" />
              <div className="reward-content">
                <h4 className="reward-title">{reward.pname}</h4>
                {parsedRewards.map((item, i) => (
                  (item.aname || item.avalue) && (
                    <p key={i}>
                      <strong>{item.aname}</strong>
                      {item.avalue && item.avalue.trim() !== "" ? ` – ${item.avalue}` : ""}
                    </p>
                  )
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default C503;
