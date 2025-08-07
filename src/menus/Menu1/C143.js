import React, { useState, useEffect } from "react";
import "./home.css";

// ✅ Backend API URL
const url = "http://10.72.46.57:5000/api/p2c143"; // add pname as query param

function Newsapi() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  // ✅ Fetch rewards data when component mounts
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("✅ Rewards data from backend:", json);
        setItems(json);
        setDataIsLoaded(true);
      })
      .catch((error) => {
        console.error("❌ Error fetching rewards:", error);
      });
  }, []);

  // 🔁 Show loading
  if (!dataIsLoaded) {
    return (
      <section className="reward">
        <div className="text-start text-white m-2 py-3">
          <h3 id="h11">
            <i className="fa fa-trophy" aria-hidden="true" id="icon" />
            Loading Rewards...
          </h3>
        </div>
      </section>
    );
  }

  // ✅ Display rewards
  return (
    <section className="reward">
      <div className="text-start text-red m-2 py-3">
        {items.map((details, index) => (
          <div key={index}>
            <h3 className="font-weight-bold text-left" id="h11">
              <i className="fa fa-trophy" aria-hidden="true" id="icon" />
              {details.ptitle}
            </h3>

            {details.a?.map((e, i) => (
              <div className="card__picture2 p-1 text-left" id="tool2" key={i}>
                <div id="events">
                  <img
                    src="./images/images.jpg"
                    alt={e.imgalt || "reward image"}
                    className="card__img2"
                  />
                  
                </div>
                <h6 id="covid4">
                  <a href={e.avalue} target="_blank" rel="noopener noreferrer">
                    {e.aname}
                  </a>
                </h6>
                <p id="para3">{e.aname}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Newsapi;