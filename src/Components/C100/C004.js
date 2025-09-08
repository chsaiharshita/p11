import React from "react";
import { useSelector } from "react-redux";
import "./home.css";
import C005 from "./C005.js";
import Paragraph from "../Common/Paragraph"; // ✅ common Paragraph

function C004() {
  // ✅ Data from Redux instead of sitedata.json
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <section className="about">
      <div className="container">
        <div className="row" id="about">
          <div className="col-lg">
            {siteData?.section2?.map((home, index) => (
              <section key={index}>
                <div className="row">
                  <section className="m-2 py-4">
                    {/* ✅ Title with direct h3 */}
                    <h3 className="font-weight-bold text-center">
                      {home.title}
                    </h3>

                    <div className="col-lg-12 text-start m-2 py-1">
                      {/* ✅ Paragraphs only via Paragraph component */}
                      {home.paragraph?.map((e, idx) => (
                        <Paragraph key={idx} text={e.p} />
                      ))}

                      {/* ✅ Button */}
                      <a
                        className="btn btn-danger btn-sm"
                        href={home.button_link}
                      >
                        {home.button}
                      </a>
                    </div>
                  </section>
                </div>
              </section>
            ))}
          </div>
          <C005 />
        </div>
      </div>
    </section>
  );
}

export default C004;
