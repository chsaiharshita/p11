import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function Pagetype1() {
  return (
    <div>
      {data.Pagetype1.map((information) => {
        return (
          <section className="container" id=""  >
            <div className="content">
              <h3 className=" m-3 ">{information.heading}</h3>
               <h6 className="m-3">{information.header}</h6>
                {information.detailservices.map((content) => {
                return (
                  <>
                    <h5 className="  ">{content.header}</h5>
                    <p>{content.p}</p>
                    <section>
                      {content.paragraph.map((detail) => {
                        return (
                          <ul className="">
                          <p className="" id="p">
                             {detail.p}
                             </p>
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

export default Pagetype1;
