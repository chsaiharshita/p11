import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function Pagetype15() {
  return (
    <div>
      {data.Pagetype15.map((information) => {
        return (
          <section className="container">
            <div className="content">
              <h3 className="m-3">{information.heading}</h3>
              {information.detailservices.map((content) => {
                return (
                  <>
                    <h5 className="  ">{content.header}</h5>
                    <section>
                      {content.paragraph.map((detail) => {
                        return (
                          <ul className="" > 
                          <a  href={detail.link}  id="p" >
                         {detail.p}
                             {detail.title} 
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

export default Pagetype15;
