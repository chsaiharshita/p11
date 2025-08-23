import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function C209() {
  return (
    <div>
      {(data.Pagetype6 || []).map((information, idx) => (
        <section className="container" key={idx}>
          <div className="content">
            <h3 className="m-3">{information.heading}</h3>

            {(information.detailservices || []).map((content, cIdx) => (
              <React.Fragment key={cIdx}>
                {/* First Table */}
                <div id="q">
                  <h5 style={{ color: "red" }}>{content.header}</h5>
                  <p>{content.p}</p>
                  <table
                    className="col-lg-12 col-xs-10 col-md-8 d-sm-10"
                    id="customer"
                  >
                    <thead>
                      <tr>
                        <th style={{ width: "5%" }}>{content.Serial}</th>
                        <th style={{ width: "65%" }}>{content.Trainingwing}</th>
                        <th style={{ width: "30%" }}>{content.Contact}</th>
                      </tr>
                    </thead>
                    <tbody id="customer">
                      {(content.paragraph || []).map((details, pIdx) => (
                        <tr key={pIdx}>
                          <td>{details.Serial}</td>
                          <td
                            style={{
                              textAlign: "left",
                              paddingLeft: "10px",
                            }}
                          >
                            {details.Trainingwing}
                          </td>
                          <td>
                            <a href={details.link} target="_blank" rel="noreferrer">
                              View
                            </a>
                            <i
                              className="fa fa-download pdf-download"
                              aria-hidden="true"
                            ></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Second Table */}
                <section>
                  <div id="q">
                    <h5 style={{ color: "red" }}>{content.header1}</h5>
                    <p>{content.p1}</p>
                    <table
                      className="col-lg-12 col-xs-10 col-md-8 d-sm-10"
                      id="customer"
                    >
                      <thead>
                        <tr>
                          <th style={{ width: "5%" }}>{content.Serial1}</th>
                          <th style={{ width: "65%" }}>{content.Trainingwing1}</th>
                          <th style={{ width: "30%" }}>{content.Contact1}</th>
                        </tr>
                      </thead>
                      <tbody id="customer">
                        {(content.paragraph1 || []).map((details, p1Idx) => (
                          <tr key={p1Idx}>
                            <td>{details.Serial}</td>
                            <td
                              style={{
                                textAlign: "left",
                                paddingLeft: "10px",
                              }}
                            >
                              {details.Trainingwing}
                            </td>
                            <td>
                              <a href={details.link1}>
                                View
                              </a>
                              <i
                                className="fa fa-download pdf-download"
                                aria-hidden="true"
                              ></i>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </React.Fragment>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default C209;
