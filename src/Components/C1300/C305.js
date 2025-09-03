import React from "react";
import "./stylesheet.css";
import data from "../../sitedata.json";

function C305() {
  return (
    <div>
      {data.PagetypeE.map((information) => {
        return (
          <section className="container" id="container-3">
            <div className="content" >
              <h3>{information.heading}</h3>
              <h5>{information.subtitle}</h5>
              <h5>{information.header}</h5>
              {information.content.map((details) => {
                return (
                  <div className="m-2 ">
                    <a  href={details.link}  className="font-weight-normal p-1">
                      {details.description}
                    </a>
                  </div>
                );
              })} 
               <p>{information.p}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default C305;
