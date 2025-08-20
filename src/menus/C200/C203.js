import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function C203() {
  return (
    <div>
      {data.Pagetype3.map((information, index1) => (
        <section className="container" key={index1}>
          <div className="content">
            <h3 className="m-3">{information.heading}</h3>

            {information.detailservices.map((content, index2) => (
              <div className="" id="q" key={index2}>
                <h5>{content.header}</h5>
                <p>{content.p}</p>

                <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer">
                  <thead>
                    <tr>
                      <th style={{ width: "5%" }}>{content.Serial}</th>
                      <th style={{ width: "65%" }}>{content.Trainingwing}</th>
                      <th style={{ width: "30%" }}>{content.Contact}</th>
                    </tr>
                  </thead>
                  <tbody id="customer">
                    {content.paragraph.map((details, index3) => (
                      <tr id="text_align" key={index3}>
                        <td>{details.Serial}</td>
                        <td style={{ textAlign: "left", paddingLeft: "10px" }}>
                          {details.Trainingwing}
                        </td>
                        <td>
                          <a href={details.link} target="_blank" rel="noreferrer">
                            View
                            <i className="fa fa-download pdf-download" aria-hidden="true"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default C203;
