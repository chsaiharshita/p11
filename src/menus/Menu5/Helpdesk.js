import React from "react";
import data from "../../sitedata.json";

function Helpdesk() {
  return (
    <div>
      {data.Helpdesk.map((information) => {
        return (
          <section className="container" >
            <div className="content" >
              <h3>{information.heading}</h3>
              <h5>{information.p}</h5>
              {information.content.map((details) => {
                return (
                  <div>
                  <i className=" fa fa-hand-o-right m-2 px-2" >
                  <a  href={details.link} className="font-weight-normal p-1 m-1" target="_blank">
                  {details.description}
                 </a></i>
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

export default Helpdesk;
