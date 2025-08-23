import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function drugs() {
  return (
    <div>
    {data.Drugs.map((information) => {
      return (
        <section className="container" id="container-A">
          <div className="content">
            <h3 className="m-3">{information.heading}</h3>
            {information.detailservices.map((content) => {
              return (
                <>
                  <h5 className="  ">{content.header}</h5>
                  <section>
                    {content.paragraph.map((detail) => {
                      return (
                        <ul className="a">
                          <li className="m-2">{detail.p}
                          </li>
                         <a  className="fa fa-file-pdf-o" href={detail.link}  >
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

export default drugs;


