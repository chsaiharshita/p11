import React, { useEffect, useState } from "react";
import siteData from "../../sitedata.json";
import "./C503.css";

function C503() {
  const [rewardsData, setRewardsData] = useState([]);
  const [icon, setIcon] = useState(""); // single icon for all cards
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Load rewards icon from siteData
    if (siteData.rewardsIcons?.img) {
      setIcon(siteData.rewardsIcons.img);
    }

    // Fetch rewards API
    fetch(siteData.P0url3)
      .then(async (res) => {
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.error || `HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const rewardsArray = [];
        const rawRewards = Array.isArray(data) ? data : [data];

        // Flatten each `a` item into a separate card
        rawRewards.forEach((reward) => {
          if (Array.isArray(reward.a)) {
            reward.a.forEach((item) => {
              rewardsArray.push({
                title: item.aname || reward.title || "No Title",
                date: reward.date || "",
                content: item.details || "", // optional details
                pdf_link: item.avalue || "",
              });
            });
          } else {
            rewardsArray.push({
              title: reward.a?.aname || reward.title || "No Title",
              date: reward.date || "",
              content: reward.a?.details || "",
              pdf_link: reward.a?.avalue || "",
            });
          }
        });

        setRewardsData(rewardsArray);
      })
      .catch((err) => {
        console.error("Failed to fetch rewards:", err);
        setRewardsData([{ error: err.message }]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading rewards...</p>;
  if (!rewardsData.length || (rewardsData[0] && rewardsData[0].error))
    return <p style={{ color: "red" }}>{rewardsData[0]?.error || "No rewards found"}</p>;

  return (
    <div className="rewards-container">
      <h3>Rewards & Achievements</h3>
      <div className="rewards-list">
        {rewardsData.map((reward, index) => (
          <div key={index} className="reward-card">
            {/* Icon */}
            {icon && <img src={icon} alt="reward" className="reward-icon" />}

            <div className="reward-content">
              {/* Title */}
              <h4 className="reward-title">{reward.title}</h4>

              {/* Date */}
              {reward.date && <p className="reward-date">DATE: {reward.date}</p>}

              {/* Content / Details */}
              {reward.content && <p className="reward-desc">{reward.content}</p>}

              {/* PDF link */}
              {reward.pdf_link && (
                <p className="reward-link">
                  📄{" "}
                  <a href={reward.pdf_link} target="_blank" rel="noopener noreferrer">
                    View Document
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default C503;
