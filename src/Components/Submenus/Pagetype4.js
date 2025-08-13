import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function Pagetype4() {
  return (
    <div>
      {Array.isArray(data.Pagetype4) && data.Pagetype4.map((information, infoIndex) => {
        return (
          <section className="container" id="" key={infoIndex}>
            <div className="content">
              <h3 className="m-3">{information.heading}</h3>
              {Array.isArray(information.detailservices) && information.detailservices.map((content, contentIndex) => {
                return (
                  <div key={contentIndex} className="" id="q">
                    <h5>{content.header}</h5>
                    <p>{content.p}</p>
                    <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer">
                      <thead> 
                        <tr>
                          <th style={{width:"5%"}}>{content.Serial}</th>
                          <th style={{width:"65%"}}>{content.Trainingwing}</th>
                          <th style={{width:"30%"}}>{content.Contact}</th>
                        </tr>
                      </thead>
                      <tbody id="customer">
                        {Array.isArray(content.paragraph) && content.paragraph.map((details, detailsIndex) => (
                          <tr key={detailsIndex} id="text_align">
                            <td>{details.Serial}</td>
                            <td style={{textAlign:"left", paddingLeft:"10px"}}>{details.Trainingwing}</td>
                            <td>
                              <a href={details.link} target="_blank" rel="noreferrer">
                                View <i className="fa fa-download pdf-download" aria-hidden="true"></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Pagetype4;
