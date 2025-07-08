import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function Node276() {
  return (
    <div>
      {data.Node276.map((information) => {
        return (
          <section className="container" >
            <div className="content">
              <h3 className="  m-3">{information.heading}</h3>
              {information.detailservices.map((content) => {
                return (
                  <>
                    <h5 className="">{content.header}</h5>
                    <section>
                      {content.paragraph.map((detail) => {
                        return (
                            <ul className="m-2">
                            <a href={detail.link} target="_blank" id="p">
                                  {detail.p} 
                                </a>
                            </ul>
                          );
                        })}
                     </section>
                  </>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Node276;
