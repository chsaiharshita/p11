import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function C201() {
  return (
    <div>
      {data.Pagetype1.map((information, index) => {
        return (
          <section className="container" key={index}>
            <div className="content">
              {/* Heading in black color */}
              <h3 className="m-3 heading-black">{information.heading}</h3>
              <h6 className="m-3">{information.header}</h6>
              {information.detailservices.map((content, subIndex) => {
                return (
                  <div key={subIndex}>
                    <h5>{content.header}</h5>
                    <p>{content.p}</p>
                    <section>
                      {content.paragraph.map((detail, paraIndex) => {
                        return (
                          <ul key={paraIndex}>
                            <p className="paragraph-text" id="p">
                              {detail.p}
                            </p>
                          </ul>
                        );
                      })}
                    </section>
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

export default C201;
