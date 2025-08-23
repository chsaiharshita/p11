import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function C257() {
  return (
    <div>
    {data.SubPage7.map((information) => {
      return (
        <section className="container" id="container-A">
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
                        <a   href={detail.link}  >
                        {detail.description}
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

export default C257;


