import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function Pagetype9() {
  return (
    <div>
      {data.Pagetype9.map((information) => {
        return (
          <section className="container ">
            <div className="content">
              <h3 className="  ">{information.heading}</h3>
              {information.detailservices.map((content) => {
                return (
                  <>
                    <h5 className="  ">{content.header}</h5>
                    <section>
                      {content.paragraph.map((detail) => {
                        return (
                           <ul className="" id="p">{detail.p}
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

export default Pagetype9;
