import React, { useState, useEffect } from "react";
import "./home.css";
import Marquee from "react-fast-marquee";

// ✅ Replace with your backend URL
const url = "http://10.72.46.57:5000/api/p2c141";

function Home() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then((json) => {
        console.log("✅ Announcements from backend:", json);
        setItems(json);
        setDataIsLoaded(true);
      })
      .catch((error) => {
        console.error("❌ Error fetching announcements:", error);
        setItems([]);
        setDataIsLoaded(true);
      });
  }, []);

  if (!dataIsLoaded) {
    return (
      <div className="container text-white py-3">
        <h3>
          <i className="fa fa-bullhorn" aria-hidden="true" id="icon" />
          Loading Announcements...
        </h3>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container text-warning py-3">
        <h3>
          <i className="fa fa-bullhorn" aria-hidden="true" id="icon" />
          No announcements available.
        </h3>
      </div>
    );
  }

  return (
    <div className="test">
      <section className="container" id="latest">
        {items.map((details, index) => (
          <section key={index}>
            <div className="announcements row d-lg-block">
              <h3
                className="announcements__text col-xs-8 col-lg-2 col-md-12 col-sm-12 text-center"
                id="announcements"
              >
                {details.ptitle}
              </h3>

              <Marquee
                className="col-xs-8 col-lg-10 col-md-12 col-sm-12 custom-marquee"
                pauseOnHover
                direction="left"
                speed={40}
              >
                <div className="announcement-links">
                  {details.a?.map((e, i) => (
                    <p className="announcements__list" key={i}>
                      <a
                        href={e.avalue || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {e.aname}
                      </a>
                    </p>
                  ))}
                </div>
              </Marquee>
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}

export default Home;