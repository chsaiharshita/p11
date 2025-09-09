import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function C205() {
  return (
    <div>
      {data.Pagetype16.map((information) => {
        return (
          <section className="container" >
            <div className="content">
              <h3>{information.heading}</h3>
              <h5>{information.p}</h5>
              <h5>{information.header}</h5>
               {information.content.map((details) => {
                return (
                 <div>
                     <i className=" fa fa-hand-o-right m-1 px-2">
                      </i>
                    <a  href={details.link}   className="font-weight-normal p-1">
                      {details.description}
                    </a>
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

export default C205;
