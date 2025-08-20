import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function C204() {
  return (
    <div>
      {data.Pagetype8.map((information) => {
        return (
          <section className="container">
            <div className="content">
              <h3 className=" m-3 ">{information.heading}</h3>
              {information.detailservices.map((content) => {
                return (
                  <>
                    <h5 className=" m-3 ">{content.header}</h5>
                    <section>
                      {content.paragraph.map((detail) => {
                        return (
                          <div>
                          <p className=" m-1 p-1" id="p">
                          <i  className=" fa fa-hand-o-right  px-2">
                          </i> {detail.p}
                             </p>
                             </div>
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

export default C204;
