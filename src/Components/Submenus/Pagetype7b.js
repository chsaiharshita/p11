import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function Pagetype7() {
  return (
    <div>
      {data.Pagetype7.map((information) => {
        return (
          <section className="container" >
            <div className="content">
              <h3 className="m-3">{information.heading}</h3>
              <h5 className="m-3">{information.p}</h5>
              <h5 className="m-3">{information.header}</h5>
              {information.content.map((details) => {
                return (
                 <div>
                  <i className="p-1 m-1">
                   </i>
                 <a  className="font-weight-normal p-1 " href={details.link}  >
                   {details.description}
                 </a>
                 <a  className="font-weight-normal p-1 "   >
                   {details.text}
                 </a>
                 <a   className="font-weight-normal p-1" href={details.link}  >
                   {details.title}
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

export default Pagetype7;
