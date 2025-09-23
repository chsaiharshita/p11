import React from "react";
import { useSelector } from "react-redux";
import "./home.css";
import C121 from "../Common/C121"; // ✅ common Paragraph

function C004() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <section className="about py-4">
      <div className="container">
        <div className="row" id="about">
          {/* ✅ Left side About Section */}
          <div className="col-lg-7">
            {siteData?.section2?.map((home, index) => (
              <div key={index}>
                <h3 className="font-weight-bold text-center mb-3">
                  {home.title}
                </h3>

                <div className="text-start">
                  {home.paragraph?.map((e, idx) => (
                    <C121 key={idx} text={e.p} />
                  ))}

                  <a
                    className="btn btn-danger btn-sm mt-3"
                    href={home.button_link}
                  >
                    {home.button}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Right side Profiles */}
          <div className="col-lg-5 mt-4 mt-lg-0">
            {siteData?.section3?.map((details, index) => (
              <div key={index}>
                {details.card1.map((e, idx) => (
                  <div
                    className="profile-card d-flex align-items-center mb-3 shadow-sm"
                    key={idx}
                  >
                    {/* Image */}
                    <div className="profile-img">
                      <img
                        src={e.imgsrc}
                        alt={e.imgalt}
                        className="img-fluid rounded"
                      />
                    </div>

                    {/* Text */}
                    <div className="ms-3">
                      <h5 className="text-danger mb-1">{e.title}</h5>
                      <p className="mb-1">{e.description}</p>
                      {e.para?.map((f, fIdx) => (
                        <p key={fIdx} className="small mb-0">
                          {f.subtitle}{" "}
                          <a href={f.link} target="_blank" rel="noreferrer">
                            {f.viewmore}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default C004;
