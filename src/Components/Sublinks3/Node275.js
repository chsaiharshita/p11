import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function Node275() {
  return (
    <div>
      {data.Node275.map((information) => {
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
                          <ul className="" >
                          {detail.title} 
                          <p  href={detail.link} target="_blank" id="p" >
                          {detail.p}
                         </p>
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

export default Node275;
