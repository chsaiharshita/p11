import React from "react";
import { useSelector } from "react-redux";
import C131 from "../Common/C131";
import C146 from "../Common/C146";
import "./C401.css";

function C402() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
      {siteData?.Police?.map((page, pageIndex) => (
        <section className="container" key={pageIndex}>
          <div className="content">
            {/* Main Heading */}
            {page.heading && (
              <C131
                content={{
                  header: page.heading,
                  p: "",
                  paragraph: []
                }}
              />
            )}

            {/* Paragraphs */}
            {page.detailservices &&
              page.detailservices.map((para, i) => (
                <C131
                  key={i}
                  content={{
                    header: para.heading || "",
                    p: para.p || "",
                    paragraph: []
                  }}
                />
              ))}

            {/* Common Tables */}
            <C146 data={page.trafficPoints} />
            <C146 data={page.signalLights} />
            <C146 data={page.blinkingPoints} />
            
            {page.oneWayAreas && (
  <section className="container">
    <div className="content-text">
      <h2 align="center">
        <b>
          <u>{page.oneWayAreas.title}</u>
        </b>
      </h2>
      <ol>
        {page.oneWayAreas.rows.map((row, index) => (
          <li key={index}>{row.area}</li>
        ))}
      </ol>
    </div>
  </section>
)}
<C146 data={page.importantJunctions} />
<C146 data={page.busyTrafficJunctions} />
<C146 data={page.busyRoutes} />
{page.busyLocalities && (
  <section className="container">
    <div className="content-text">
      <h2 align="center">
        <b><u>{page.busyLocalities.title}</u></b>
      </h2>
      {page.busyLocalities.subtitle && (
        <p align="center"><i>{page.busyLocalities.subtitle}</i></p>
      )}
      <ol>
        {page.busyLocalities.list.map((loc, i) => (
          <li key={i}>{loc}</li>
        ))}
      </ol>
    </div>
  </section>
)}
<C146 data={page.mainParkingPlaces} />
          </div>
        </section>
      ))}
    </div>
  );
}

export default C402;