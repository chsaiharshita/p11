import React from "react";
import "./stylesheet.css";
import data from "../../sitedata.json";

function C304() {
  return (
    <div>
      {data.PagetypeD.map((information) => {
        return (
          <section className="container" id="">
            <div className="content" >
              <h3 className="m-3">{information.heading}</h3>
              <h5 className="m-3">{information.p}</h5>
              {information.content.map((details) => {
                return (
                  <div className=" ">
                     <i className=" fa fa-hand-o-right m-2 px-2">
                      </i>
                    <a  href={details.link} target="_blank" className="font-weight-normal p-1">
                      {details.description}
                    </a>
                  </div>
                );
              })}
              
            </div>
            <div className="content" >
              <h5>{information.paragraph}</h5>
              {information.data.map((details) => {
                return (
                  <div className=" ">
                  <i className=" fa fa-hand-o-right m-2 px-2">
                   </i>
                 <a  href={details.link} target="_blank" className="font-weight-normal p-1">
                   {details.text}
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

export default C304;
