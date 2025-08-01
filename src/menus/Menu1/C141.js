/*
import React, { useState, useEffect } from "react";
import "./home.css";
import Marquee from "react-fast-marquee";
import data from "../../sitedata.json";
import url from "../../sitedata.json";

function Home() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pname: "p1c141" }) // change 'pname' as needed
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        setDataIsLoaded(true);
      });
  }, []);

  if (!dataIsLoaded) {
    return (
      <div className="">
        <section className="container" id="latest">
          {data.Latestnews.map((details) => (
            <section key={details.ptitle}>
              <div className="announcements row d-lg-block">
                <h3
                  className="announcements__text col-xs-8 col-lg-2 col-md-12 col-sm-12 text-center"
                  id="announcements"
                >
                  {details.ptitle}
                </h3>
                {details.a.map((e, index) => (
                  <Marquee
                    key={index}
                    className="col-xs-8 col-lg-10 col-md-12 col-sm-12"
                    id="marquee"
                    pauseOnHover
                    direction="left"
                    speed={60}
                    delay={10}
                  >
                    <p className="announcements__list">
                      <a href={e.link}>{e.aname}</a>
                    </p>
                  </Marquee>
                ))}
              </div>
            </section>
          ))}
        </section>
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
              {details.a.map((e, i) => (
                <Marquee
                  key={i}
                  className="col-xs-8 col-lg-10 col-md-12 col-sm-12"
                  pauseOnHover
                  direction="left"
                  speed={30}
                >
                  <p className="announcements__list">
                    <a href="node151">{e.aname}</a>
                  </p>
                </Marquee>
              ))}
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}

export default Home;
*/

import React, { useState, useEffect } from "react";
import "./home.css";
import Marquee from "react-fast-marquee";

// ✅ Replace with your backend GET URL
const url = "http://192.168.137.193:5000/api/latestnews";

function Home() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  // ✅ Fetch data using GET
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log("✅ Announcements from backend:", json);
        setItems(json);
        setDataIsLoaded(true);
      })
      .catch((error) => {
        console.error("❌ Error fetching announcements:", error);
        setItems([]); // Optional fallback
        setDataIsLoaded(true);
      });
  }, []);

  // 🔁 Loading UI
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

  // ❕ No data case
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

  // ✅ Main UI
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
              {details.a?.map((e, i) => (
                <Marquee
                  key={i}
                  className="col-xs-8 col-lg-10 col-md-12 col-sm-12"
                  pauseOnHover
                  direction="left"
                  speed={30}
                >
                  <p className="announcements__list">
                    <a href={e.avalue || "#"} target="_blank" rel="noopener noreferrer">
                      {e.aname}
                    </a>
                  </p>
                </Marquee>
              ))}
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}

export default Home;