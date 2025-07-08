import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";


function PagetypeB() {
  return (
    <>
      {data.PagetypeB.map((information) => {
        return (
          <section className="container" id="" >
            <div className="content">
            <h3 className="  m-3">{information.heading}</h3>
            <h6 className="m-3">{information.header}</h6>
            {information.detailservices.map((content) => {
              return (
                <>
                  <h5 className="  ">{content.header}</h5>
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
    </>
  );
}

export default PagetypeB;
