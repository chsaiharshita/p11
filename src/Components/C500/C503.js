import React, { useEffect, useState } from "react";
import siteData from "../../sitedata.json";
import "./C503.css";

function C503() {
  const [rewardsData, setRewardsData] = useState([]);
  const [icon, setIcon] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Set icon from siteData or fallback to default icon in public folder
    const fallbackIcon = "/images/awards-icon.png"; // Place your uploaded image here
    if (siteData.rewardsIcons?.img) {
      setIcon(siteData.rewardsIcons.img);
    } else {
      setIcon(fallbackIcon);
    }

    // Fetch rewards data
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

        rawRewards.forEach((reward) => {
          if (Array.isArray(reward.a)) {
            reward.a.forEach((item) => {
              rewardsArray.push({
                title: item.aname || reward.title || "No Title",
                date: reward.date || "",
                content: item.details || "",
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

  if (!rewardsData.length || rewardsData[0]?.error) {
    return <p style={{ color: "red" }}>{rewardsData[0]?.error || "No rewards found"}</p>;
  }

  return (
    <div className="rewards-container">
      <h3>Rewards & Achievements</h3>
      <div className="rewards-list">
        {rewardsData.map((reward, index) => (
          <div key={index} className="reward-card">
            {icon && (
              <div className="reward-icon">
                <img src={icon} alt="reward icon" />
              </div>
            )}
            <div className="reward-content">
              <h4 className="reward-title">{reward.title}</h4>
              {reward.date && <p className="reward-date">{reward.date}</p>}
              {reward.content && <p className="reward-desc">{reward.content}</p>}
              {reward.pdf_link && (
                <p className="reward-link">
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
